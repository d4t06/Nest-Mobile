import { Injectable, NotFoundException } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
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
    const brand = new Brand(body);
    this.brandRepository.save(brand);
  }

  async update(id: number, body: CreateBrandDto) {
    const brand = await this.brandRepository.findOne({ where: { id } });
    
    if (!brand) throw new NotFoundException();
    this.brandRepository.update(id, brand);
  }

  async delete(id: number) {
    const brand = await this.brandRepository.findOne({ where: { id } });

    if (!brand) throw new NotFoundException();
    this.brandRepository.delete(id);
  }
}
