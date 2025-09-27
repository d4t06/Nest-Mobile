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
exports.ProductsController = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("./products.service");
const create_product_dto_1 = require("./dto/create.product.dto");
const update_product_dto_1 = require("./dto/update.product.dto");
const auth_guard_1 = require("../auth/guards/auth.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const role_enum_1 = require("../auth/decorators/role.enum");
const roles_guard_1 = require("../auth/guards/roles.guard");
const create_user_like_product_dto_1 = require("../user-like-product/dto/create-user-like-product.dto");
const create_product_feature_dto_1 = require("../product-feature/dto/create-product-feature.dto");
const update_product_feature_dto_1 = require("../product-feature/dto/update-product-feature.dto");
let ProductsController = class ProductsController {
    constructor(productService) {
        this.productService = productService;
    }
    async test() {
        await this.productService.test();
    }
    findAll(page, category_id, brand_id, tag_id) {
        return this.productService.findAll(page, category_id, brand_id, tag_id);
    }
    findAllOfTag(page, tag_id) {
        return this.productService.findAllOfTag(page, tag_id);
    }
    search(q) {
        return this.productService.search(q);
    }
    async findOne(id) {
        return await this.productService.findOne(id);
    }
    async create(product) {
        const newProduct = await this.productService.create(product);
        return newProduct;
    }
    async addTag(productTags) {
        return await this.productService.addTag(productTags);
    }
    async removeTag(product_id, tag_id) {
        return await this.productService.removeTag({
            tag_id,
            product_id,
        });
    }
    async update(updateDto, id) {
        const newProduct = await this.productService.update(updateDto, id);
        return newProduct;
    }
    async delete(id) {
        await this.productService.delete(id);
    }
    async getLikeProduct(request, user_id) {
        if (request.user.id !== user_id)
            throw new common_1.BadRequestException();
        return await this.productService.getLikeProduct(user_id);
    }
    async likeProduct(request, data) {
        if (request.user.id !== data.user_id)
            throw new common_1.BadRequestException();
        await this.productService.likeProduct(data);
    }
    async unLikeProduct(request, product_id, user_id) {
        if (request.user.id !== user_id)
            throw new common_1.BadRequestException();
        return await this.productService.unlikeProduct({
            user_id,
            product_id,
        });
    }
    async addProductFeature(data) {
        await this.productService.addFeature(data);
    }
    async editProductFeature(data, id) {
        await this.productService.editFeature(data, id);
    }
    async deleteProductFeature(id) {
        await this.productService.removeFeature(id);
    }
};
exports.ProductsController = ProductsController;
__decorate([
    (0, common_1.Get)('/test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "test", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('category_id', new common_1.ParseIntPipe({ optional: true }))),
    __param(2, (0, common_1.Query)('brand_id', new common_1.ParseArrayPipe({ optional: true }))),
    __param(3, (0, common_1.Query)('tag_id', new common_1.ParseArrayPipe({ optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Array, Array]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/tags/:tag_id'),
    __param(0, (0, common_1.Query)('page', new common_1.ParseIntPipe({ optional: true }))),
    __param(1, (0, common_1.Param)('tag_id', new common_1.ParseIntPipe({ optional: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "findAllOfTag", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('q')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductsController.prototype, "search", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/tags'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "addTag", null);
__decorate([
    (0, common_1.Delete)(':product_id/tags/:tag_id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __param(0, (0, common_1.Param)('product_id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('tag_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "removeTag", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_product_dto_1.UpdateProductDto, Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('/likes/:user_id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('user_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "getLikeProduct", null);
__decorate([
    (0, common_1.Post)('/likes'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_user_like_product_dto_1.CreateUserLikeProductDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "likeProduct", null);
__decorate([
    (0, common_1.Delete)(':product_id/likes/:user_id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('product_id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Param)('user_id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "unLikeProduct", null);
__decorate([
    (0, common_1.Post)('/features'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_feature_dto_1.CreateProductFeatureDto]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "addProductFeature", null);
__decorate([
    (0, common_1.Put)('/features/:id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_product_feature_dto_1.UpdateProductFeature, Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "editProductFeature", null);
__decorate([
    (0, common_1.Delete)('/features/:id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductsController.prototype, "deleteProductFeature", null);
exports.ProductsController = ProductsController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsController);
//# sourceMappingURL=products.controller.js.map