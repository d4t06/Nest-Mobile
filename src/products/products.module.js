"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const products_controller_1 = require("./products.controller");
const products_service_1 = require("./products.service");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
const description_entity_1 = require("../description/entities/description.entity");
const product_tag_entity_1 = require("../product-tag/entities/product-tag.entity");
const user_like_product_entity_1 = require("../user-like-product/entities/user-like-product.entity");
const product_feature_entity_1 = require("../product-feature/entities/product-feature.entity");
let ProductsModule = class ProductsModule {
};
exports.ProductsModule = ProductsModule;
exports.ProductsModule = ProductsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([product_entity_1.Product]),
            typeorm_1.TypeOrmModule.forFeature([description_entity_1.Description]),
            typeorm_1.TypeOrmModule.forFeature([product_tag_entity_1.ProductTag]),
            typeorm_1.TypeOrmModule.forFeature([user_like_product_entity_1.UserLikeProduct]),
            typeorm_1.TypeOrmModule.forFeature([product_feature_entity_1.ProductFeature]),
        ],
        controllers: [products_controller_1.ProductsController],
        providers: [products_service_1.ProductsService],
    })
], ProductsModule);
//# sourceMappingURL=products.module.js.map