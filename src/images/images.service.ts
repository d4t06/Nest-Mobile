import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { generateId } from 'utils/apphelper';
import { CloudinaryService } from './cloudinary.service';
import { Image } from './entities/image.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

const pageSize = +process.env.PAGE_SIZE || 18;

@Injectable()
export class ImagesService {
  constructor(
    @InjectRepository(Image)
    private readonly imageRepository: Repository<Image>,

    private readonly cloudinarySerive: CloudinaryService,
  ) {}

  async create(file: Express.Multer.File) {
    const uploadRes = await this.cloudinarySerive.uploadImage(file);

    const createImageDto: CreateImageDto = {
      image_url: uploadRes.secure_url,
      name: generateId(file.originalname),
      public_id: uploadRes.public_id,
      size: file.size,
    };

    const newImage = await this.imageRepository.save(createImageDto);
    return newImage;
  }

  async findAll(page: number) {
    const [images, count] = await this.imageRepository
      .createQueryBuilder('image')
      .take(pageSize)
      .skip((page - 1) * pageSize)
      .getManyAndCount();

    return { page, pageSize, count, images };
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
