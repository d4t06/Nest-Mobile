"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTagModule = void 0;
const common_1 = require("@nestjs/common");
const product_tag_service_1 = require("./product-tag.service");
const typeorm_1 = require("@nestjs/typeorm");
const product_tag_entity_1 = require("./entities/product-tag.entity");
let ProductTagModule = class ProductTagModule {
};
exports.ProductTagModule = ProductTagModule;
exports.ProductTagModule = ProductTagModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_tag_entity_1.ProductTag])],
        providers: [product_tag_service_1.ProductTagService],
    })
], ProductTagModule);
//# sourceMappingURL=product-tag.module.js.map