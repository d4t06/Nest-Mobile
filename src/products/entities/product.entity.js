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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const category_entity_1 = require("../../categories/entities/category.entity");
const typeorm_1 = require("typeorm");
const description_entity_1 = require("../../description/entities/description.entity");
const product_attribute_entity_1 = require("../../product-attribute/entities/product-attribute.entity");
const brand_entity_1 = require("../../brand/entities/brand.entity");
const comment_entity_1 = require("../../comment/entities/comment.entity");
let Product = class Product {
    constructor(product) {
        Object.assign(this, product);
    }
};
exports.Product = Product;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Product.prototype, "product_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Product.prototype, "product_name_ascii", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Product.prototype, "image_url", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Product.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.Category, (c) => c.id, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    __metadata("design:type", category_entity_1.Category)
], Product.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Product.prototype, "brand_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => brand_entity_1.Brand, (c) => c.id, {
        onDelete: 'SET NULL',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'brand_id' }),
    __metadata("design:type", brand_entity_1.Brand)
], Product.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_attribute_entity_1.ProductAttribute, (productAttribute) => productAttribute.product),
    __metadata("design:type", Array)
], Product.prototype, "attributes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.Comment, (c) => c.product),
    __metadata("design:type", Array)
], Product.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Product.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => description_entity_1.Description, (description) => description.product),
    __metadata("design:type", description_entity_1.Description)
], Product.prototype, "description", void 0);
exports.Product = Product = __decorate([
    (0, typeorm_1.Entity)({ name: 'Products' }),
    __metadata("design:paramtypes", [Object])
], Product);
//# sourceMappingURL=product.entity.js.map