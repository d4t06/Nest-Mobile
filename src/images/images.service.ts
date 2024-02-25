import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { generateId } from 'utils/apphelper';
import { CloudinaryService } from './cloudinary.service';
import { Image } from './entities/image.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { table } from 'console';

const cloudinaryService = new CloudinaryService();

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
    const images = await this.imageRepository.find({
      skip: (page - 1) * 18,
      take: 18,
    });
    return { page, images };
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
