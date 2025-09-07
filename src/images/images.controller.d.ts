/// <reference types="multer" />
import { ImagesService } from './images.service';
export declare class ImagesController {
    private readonly imagesService;
    constructor(imagesService: ImagesService);
    create(file: Express.Multer.File, width?: number): Promise<import("./dto/create-image.dto").CreateImageDto & import("./entities/image.entity").Image>;
    findAll(page: number): Promise<{
        page: number;
        page_size: number;
        count: number;
        images: import("./entities/image.entity").Image[];
    }>;
    delete(id: string): Promise<void>;
    deleteMany(images: string[]): Promise<string>;
}
