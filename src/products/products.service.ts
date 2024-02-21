import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { EntityManager, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductAttribute } from './entities/productAttribute.entity';
import { CreateProductAttributeDto } from './dto/create-productAttribute.dto';
import { UpdateProductAttributeDto } from './dto/update-productAttribute.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductAttribute)
    private readonly productAttributeRepository: Repository<ProductAttribute>,
    private readonly entityManager: EntityManager,
  ) {}

  async findAll(category_id: number, page: number) {
    const [products, count] = await this.productRepository.findAndCount({
      relations: {
        category: true,
      },
      where: {
        category_id: category_id,
      },
    });
    return { count, page, category_id, products };
  }

  findOne(product_ascii: string) {
    return this.productRepository.findOne({
      where: { product_ascii },
      relations: {
        attributes: true,
        category: {
          attributes: true,
        },
      },
    });
  }

  async create(createProductDto: CreateProductDto) {
    const item = new Product(createProductDto);
    const newProduct = await this.entityManager.save(item);
    return newProduct;
  }

  update(updateDto: UpdateProductDto, id: number) {
    this.productRepository.update(id, updateDto);
  }

  async delete(id: number) {
    await this.productRepository.delete({ id });
  }

  async createAttribute(createDto: CreateProductAttributeDto[]) {
    const newProduct = await this.productAttributeRepository.save(createDto);
    return newProduct;
  }

  async updateAttribute(updateDto: UpdateProductAttributeDto, id: number) {
    await this.productAttributeRepository.update(id, updateDto);
  }
}
