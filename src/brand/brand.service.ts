import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBrandDto } from './dto/create-brand-dto';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  async create(body: CreateBrandDto) {
    const founded = await this.brandRepository.findOne({
      where: {
        brand_name_ascii: body.brand_name_ascii,
        category_id: body.category_id,
      },
    });

    if (founded) throw new ConflictException('');

    return await this.brandRepository.save(body);
  }

  async update(id: number, body: CreateBrandDto) {
    const brand = await this.brandRepository.findOne({ where: { id } });

    if (!brand) throw new NotFoundException();
    this.brandRepository.update(id, body);
  }

  async delete(id: number) {
    const brand = await this.brandRepository.findOne({ where: { id } });

    if (!brand) throw new NotFoundException();
    this.brandRepository.delete(id);
  }
}
