/// <reference types="multer" />
import { CreateImageDto } from './dto/create-image.dto';
import { CloudinaryService } from './cloudinary.service';
import { Image } from './entities/image.entity';
import { Repository } from 'typeorm';
export declare class ImagesService {
    private readonly imageRepository;
    private readonly cloudinarySerive;
    constructor(imageRepository: Repository<Image>, cloudinarySerive: CloudinaryService);
    PAGE_SIZE: number;
    create(file: Express.Multer.File, width?: number): Promise<CreateImageDto & Image>;
    findAll(page: number): Promise<{
        page: number;
        page_size: number;
        count: number;
        images: Image[];
    }>;
    remove(public_id: string): Promise<void>;
}
