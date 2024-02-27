import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { EntityManager, FindOptionsWhere, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductAttribute } from './entities/productAttribute.entity';
import { CreateProductAttributeDto } from './dto/create-productAttribute.dto';
import { UpdateProductAttributeDto } from './dto/update-productAttribute.dto';

const PAGE_SIZE = +process.env.PAGE_SIZE || 20;

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductAttribute)
    private readonly productAttributeRepository: Repository<ProductAttribute>,
    
    private readonly entityManager: EntityManager,
  ) {}

  async findAll(page: number, category_id: number) {
    // const [products, count] = await this.productRepository.findAndCount({
    //   relations: {
    //     category: true,
    //   },
    //   take: PAGE_SIZE,
    //   skip: (page - 1) * PAGE_SIZE,
    //   select: {
    //     category: {
    //       category_name: true,
    //       category_ascii: true,
    //     },
    //   },
    //   where: {
    //     category_id: category_id,
    //   },
    // });

    const [products, count] = await this.productRepository
      .createQueryBuilder('product')
      .where('product.category_id = :category_id', { category_id: category_id })
      .limit(10)
      .getManyAndCount();

    return { count, page, category_id, page_size: PAGE_SIZE, products };
  }

  findOne(product_ascii: string) {
    return this.productRepository.findOne({
      where: { product_ascii },
      relations: {
        attributes: true,
      },
    });
  }

  findOneWithCategory(product_ascii: string) {
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

  async findAllManagement(page: number) {
    const [products, count] = await this.productRepository.findAndCount({
      select: {
        category: {
          category_ascii: true,
        },
      },
      relations: {
        category: true,
      },
    });
    return { count, page, products };
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
