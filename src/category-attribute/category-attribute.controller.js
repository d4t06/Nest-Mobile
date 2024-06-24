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
exports.CategoryAttributeController = void 0;
const common_1 = require("@nestjs/common");
const category_attribute_service_1 = require("./category-attribute.service");
const create_category_attribute_dto_1 = require("./dto/create.category-attribute.dto");
const update_category_attribute_dto_1 = require("./dto/update.category-attribute.dto");
const auth_guard_1 = require("../auth/guards/auth.guard");
let CategoryAttributeController = class CategoryAttributeController {
    constructor(categoryAttributeService) {
        this.categoryAttributeService = categoryAttributeService;
    }
    create(createDto) {
        return this.categoryAttributeService.create(createDto);
    }
    updateAttribute(id, updateDto) {
        return this.categoryAttributeService.update(updateDto, id);
    }
    deleteAttribute(id) {
        return this.categoryAttributeService.delete(id);
    }
};
exports.CategoryAttributeController = CategoryAttributeController;
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_attribute_dto_1.CreateCategoryAttributeDto]),
    __metadata("design:returntype", void 0)
], CategoryAttributeController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_category_attribute_dto_1.UpdateCategoryAttributeDto]),
    __metadata("design:returntype", void 0)
], CategoryAttributeController.prototype, "updateAttribute", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CategoryAttributeController.prototype, "deleteAttribute", null);
exports.CategoryAttributeController = CategoryAttributeController = __decorate([
    (0, common_1.Controller)('category-attributes'),
    __metadata("design:paramtypes", [category_attribute_service_1.CategoryAttributeService])
], CategoryAttributeController);
//# sourceMappingURL=category-attribute.controller.js.map