import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { EntityManager, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    private readonly entityManager: EntityManager,
  ) {}

  async findAll(category_id: number, page: number) {
    const [products, count] = await this.productRepository.findAndCount({
      relations: {
        category: true,
      },
      where: {
        category_id: 1,
      },
    });
    return { products, count, page, category_id };
  }

  findOne(id: number) {
    return this.productRepository.findOneBy({ id });
  }

  async create(createProductDto: CreateProductDto) {
    console.log('check data', createProductDto);

    const item = new Product(createProductDto);
    const newProduct = await this.entityManager.save(item);
    return newProduct;
  }

  update(body: UpdateProductDto) {
    return body;
  }
}
