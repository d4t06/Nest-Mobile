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
exports.ImagesService = void 0;
const common_1 = require("@nestjs/common");
const apphelper_1 = require("../utils/apphelper");
const cloudinary_service_1 = require("./cloudinary.service");
const image_entity_1 = require("./entities/image.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ImagesService = class ImagesService {
    constructor(imageRepository, cloudinarySerive) {
        this.imageRepository = imageRepository;
        this.cloudinarySerive = cloudinarySerive;
        this.PAGE_SIZE = +process.env.IMAGE_PAGE_SIZE || 6;
    }
    async create(file, width) {
        const uploadRes = await this.cloudinarySerive.uploadImage(file, width);
        const createImageDto = {
            image_url: uploadRes.secure_url,
            name: (0, apphelper_1.generateId)(file.originalname),
            public_id: uploadRes.public_id,
            size: Math.ceil(uploadRes.bytes / 1024),
        };
        const newImage = await this.imageRepository.save(createImageDto);
        return newImage;
    }
    async findAll(page) {
        const _page = page > 0 ? page : 1;
        const [images, count] = await this.imageRepository.findAndCount({
            take: this.PAGE_SIZE,
            skip: (_page - 1) * this.PAGE_SIZE,
            order: {
                id: 'DESC',
            },
        });
        return { page, page_size: this.PAGE_SIZE, count, images };
    }
    async remove(public_id) {
        await this.imageRepository.delete({ public_id });
        await this.cloudinarySerive.deleteImage(public_id);
    }
};
exports.ImagesService = ImagesService;
exports.ImagesService = ImagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(image_entity_1.Image)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        cloudinary_service_1.CloudinaryService])
], ImagesService);
//# sourceMappingURL=images.service.js.map