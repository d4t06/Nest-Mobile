import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { EntityManager } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(private readonly entityManager: EntityManager) {}

  findAll() {
    return 'get products';
  }

  findOne(id: number) {
    return 'get product id =' + id;
  }

  async create(createProductDto: CreateProductDto) {
    const item = new Product(createProductDto);
    await this.entityManager.save(item);
  }

  update(body: UpdateProductDto) {
    return body;
  }
}
