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
exports.Category = void 0;
const typeorm_1 = require("typeorm");
const brand_entity_1 = require("../../brand/entities/brand.entity");
const category_attribute_entity_1 = require("../../category-attribute/entities/category-attribute.entity");
let Category = class Category {
    constructor(item) {
        Object.assign(this, item);
    }
};
exports.Category = Category;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Category.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Category.prototype, "category_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Category.prototype, "category_name_ascii", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => category_attribute_entity_1.CategoryAttribute, (categoryAttribute) => categoryAttribute.category, { onDelete: 'CASCADE', onUpdate: 'CASCADE' }),
    __metadata("design:type", Array)
], Category.prototype, "attributes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => brand_entity_1.Brand, (brand) => brand.category, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", Array)
], Category.prototype, "brands", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Category.prototype, "attribute_order", void 0);
exports.Category = Category = __decorate([
    (0, typeorm_1.Entity)({ name: 'Categories' }),
    __metadata("design:paramtypes", [Object])
], Category);
//# sourceMappingURL=category.entity.js.map