import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductAttribute } from './entities/product-attribute.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductAttributeDto } from './dto/create.product-attribute.dto';
import { UpdateProductAttributeDto } from './dto/update-product-attribute.dto';

@Injectable()
export class ProductAttributeService {
  constructor(
    @InjectRepository(ProductAttribute)
    private readonly productAttributeRepository: Repository<ProductAttribute>,
  ) {}

  async createAttribute(createDto: CreateProductAttributeDto[]) {
    const newProduct = await this.productAttributeRepository.save(createDto);
    return newProduct;
  }

  async updateAttribute(updateDto: UpdateProductAttributeDto, id: number) {
    await this.productAttributeRepository.update(id, updateDto);
  }
}
