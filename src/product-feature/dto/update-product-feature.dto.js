"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductFeature = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const product_feature_entity_1 = require("../entities/product-feature.entity");
class UpdateProductFeature extends (0, mapped_types_1.PartialType)(product_feature_entity_1.ProductFeature) {
}
exports.UpdateProductFeature = UpdateProductFeature;
//# sourceMappingURL=update-product-feature.dto.js.map