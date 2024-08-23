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
exports.CommentController = void 0;
const common_1 = require("@nestjs/common");
const comment_service_1 = require("./comment.service");
const create_comment_dto_1 = require("./dto/create.comment.dto");
const auth_guard_1 = require("../auth/guards/auth.guard");
const roles_guard_1 = require("../auth/guards/roles.guard");
const roles_decorator_1 = require("../auth/decorators/roles.decorator");
const role_enum_1 = require("../auth/decorators/role.enum");
let CommentController = class CommentController {
    constructor(CommentService) {
        this.CommentService = CommentService;
    }
    findAllProductComment(product_id, page, size, approved) {
        return this.CommentService.findAllProductComment(page, size, product_id, approved);
    }
    add(dto) {
        return this.CommentService.add(dto);
    }
    approve(data) {
        return this.CommentService.approve(data.id_list);
    }
    delete(id) {
        return this.CommentService.delete(id);
    }
};
exports.CommentController = CommentController;
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Query)('product_id')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('size')),
    __param(3, (0, common_1.Query)('approved')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "findAllProductComment", null);
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_dto_1.CreateCommentDto]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "add", null);
__decorate([
    (0, common_1.Put)(''),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "approve", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard, roles_guard_1.RolesGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CommentController.prototype, "delete", null);
exports.CommentController = CommentController = __decorate([
    (0, common_1.Controller)('comments'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentController);
//# sourceMappingURL=comment.controller.js.map