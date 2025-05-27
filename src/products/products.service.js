"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./entities/product.entity");
const typeorm_2 = require("@nestjs/typeorm");
const description_entity_1 = require("../description/entities/description.entity");
const apphelper_1 = require("../utils/apphelper");
let ProductsService = class ProductsService {
    constructor(productRepository, descriptionRepository, entityManager) {
        this.productRepository = productRepository;
        this.descriptionRepository = descriptionRepository;
        this.entityManager = entityManager;
        this.pageSize = +process.env.PAGE_SIZE || 6;
    }
    async findAll(page, category_id, brand_id) {
        const where = {};
        if (category_id && +category_id)
            where.category_id = +category_id;
        if (brand_id && +brand_id)
            where.brand_id = +brand_id;
        const _page = page && +page ? +page : 1;
        const [products, count] = await this.productRepository.findAndCount({
            take: this.pageSize,
            skip: (_page - 1) * this.pageSize,
            order: {
                id: 'DESC',
            },
            where,
        });
        return {
            count,
            page: _page,
            category_id: +category_id || null,
            brand_id: +brand_id || null,
            page_size: this.pageSize,
            products,
        };
    }
    async findOne(productId) {
        const product = await this.productRepository.findOne({
            where: { id: productId },
            relations: {
                attributes: true,
                description: true,
            },
        });
        if (!product)
            throw new common_1.NotFoundException('product not found');
        return product;
    }
    async search(q) {
        const products = await this.productRepository.find({
            where: {
                product_name_ascii: (0, typeorm_1.Like)(`%${(0, apphelper_1.generateId)(q)}%`),
            },
        });
        if (products.length)
            return products;
        return [];
    }
    async create(createProductDto) {
        const foundedProduct = await this.productRepository.findOne({
            where: { product_name_ascii: createProductDto.product_name_ascii },
        });
        if (foundedProduct)
            throw new common_1.ConflictException('Product name had taken');
        const item = new product_entity_1.Product(createProductDto);
        const newProduct = await this.entityManager.save(item);
        const description = new description_entity_1.Description({
            content: newProduct.product_name,
            product_id: newProduct.id,
        });
        await this.descriptionRepository.save(description);
        return newProduct;
    }
    async update(updateDto, id) {
        return await this.productRepository.update(id, updateDto);
    }
    async delete(id) {
        const product = await this.productRepository.findOne({
            where: { id },
        });
        if (!product)
            throw new common_1.NotFoundException('product not found');
        return await this.productRepository.delete({ id });
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(product_entity_1.Product)),
    __param(1, (0, typeorm_2.InjectRepository)(description_entity_1.Description)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        typeorm_1.EntityManager])
], ProductsService);
//# sourceMappingURL=products.service.js.map