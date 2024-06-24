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
exports.BrandService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const brand_entity_1 = require("./entities/brand.entity");
const typeorm_2 = require("@nestjs/typeorm");
let BrandService = class BrandService {
    constructor(brandRepository) {
        this.brandRepository = brandRepository;
    }
    async create(body) {
        const brand = new brand_entity_1.Brand(body);
        this.brandRepository.save(brand);
    }
    async update(id, body) {
        const brand = await this.brandRepository.findOne({ where: { id } });
        if (!brand)
            throw new common_1.NotFoundException();
        this.brandRepository.update(id, brand);
    }
    async delete(id) {
        const brand = await this.brandRepository.findOne({ where: { id } });
        if (!brand)
            throw new common_1.NotFoundException();
        this.brandRepository.delete(id);
    }
};
exports.BrandService = BrandService;
exports.BrandService = BrandService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(brand_entity_1.Brand)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], BrandService);
//# sourceMappingURL=brand.service.js.map