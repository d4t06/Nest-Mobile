import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { generateId } from '@/utils/apphelper';
import { CloudinaryService } from './cloudinary.service';
import { Image } from './entities/image.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,

    private readonly cloudinarySerive: CloudinaryService,
  ) {}

  public PAGE_SIZE = +process.env.IMAGE_PAGE_SIZE || 6;

  async create(file: Express.Multer.File, width?: number, height?: number) {
    const uploadRes = await this.cloudinarySerive.uploadImage(
      file,
      width,
      height,
    );

    const createImageDto: CreateImageDto = {
      image_url: uploadRes.secure_url,
      name: generateId(file.originalname),
      public_id: uploadRes.public_id,
      size: Math.ceil(uploadRes.bytes / 1024),
    };

    console.log(uploadRes)

    const newImage = await this.imageRepository.save(createImageDto);
    return newImage;
  }

  async findAll(page: number) {
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

  async remove(public_id: string) {
    await this.imageRepository.delete({ public_id });
    await this.cloudinarySerive.deleteImage(public_id);
  }
}
