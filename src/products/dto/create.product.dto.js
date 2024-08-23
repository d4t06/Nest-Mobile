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
exports.CreateProductDto = void 0;
const class_validator_1 = require("class-validator");
class CreateProductDto {
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'product_name is required' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "product_name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'product_name_ascii is required' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "product_name_ascii", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'category_id is required' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "category_id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'brand_id is required' }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "brand_id", void 0);
//# sourceMappingURL=create.product.dto.js.map