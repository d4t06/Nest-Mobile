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
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const comment_entity_1 = require("./entities/comment.entity");
const apphelper_1 = require("../utils/apphelper");
const PAGE_SIZE = +process.env.PAGE_SIZE || 12;
let CommentService = class CommentService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    async findAllComment(page, size) {
        const _size = size < 12 ? size : PAGE_SIZE;
        const [comments, count] = await this.commentRepository.findAndCount({
            take: _size,
            skip: (page - 1) * _size,
            order: {
                id: 'DESC',
            },
        });
        return {
            comments,
            count,
            page,
            size: _size,
        };
    }
    async findAllProductComment(page, size, product_id, approved) {
        const _productId = typeof product_id === 'string' && +product_id;
        const _size = (typeof size === 'string' && +size < PAGE_SIZE && +size) || PAGE_SIZE;
        const _page = (page && typeof page === 'string' && +page) || 1;
        const where = {};
        const _approved = typeof +approved === 'number' && [0, 1].includes(+approved)
            ? +approved
            : 1;
        where.approved = !!_approved;
        if (_productId)
            where.product_id = _productId;
        const [comments, count] = await this.commentRepository.findAndCount({
            take: _size,
            skip: (_page - 1) * _size,
            order: {
                id: 'DESC',
            },
            where,
        });
        if (comments.length) {
            for (let index = 0; index < comments.length; index++) {
                const dateDiff = (0, apphelper_1.date_diff)(comments[index].created_at);
                comments[index].date_diff = dateDiff;
            }
        }
        return {
            comments,
            count,
            page: _page,
            size: _size,
            product_id: _productId,
            approved: _approved,
        };
    }
    async add(createDto) {
        const comment = new comment_entity_1.Comment({
            ...createDto,
            approved: false,
            date_diff: '',
        });
        const newComment = await this.commentRepository.save(comment);
        return newComment;
    }
    async approve(id_list) {
        return await this.commentRepository.update({ id: (0, typeorm_2.In)(id_list) }, { approved: true });
    }
    async delete(id) {
        const comment = await this.commentRepository.findOne({
            where: { id },
        });
        if (!comment)
            throw new common_1.NotFoundException('Comment not found');
        return await this.commentRepository.delete({ id });
    }
};
exports.CommentService = CommentService;
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_entity_1.Comment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CommentService);
//# sourceMappingURL=comment.service.js.map