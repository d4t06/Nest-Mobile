import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProductDto } from './dto/update.product.dto';
import { CreateProductDto } from './dto/create.product.dto';
import { EntityManager, FindOptionsWhere, Like, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Description } from '@/description/entities/description.entity';
import { generateId } from 'utils/apphelper';

const PAGE_SIZE = +process.env.PAGE_SIZE || 6;

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Description)
    private readonly descriptionRepository: Repository<Description>,

    private readonly entityManager: EntityManager,
  ) {}

  async findAll(page: number, category_id: number) {
    const where: FindOptionsWhere<Product> = {};
    console.log('get products');

    if (category_id) {
      where.category_id = category_id;
    }

    const [products, count] = await this.productRepository.findAndCount({
      take: PAGE_SIZE,
      skip: (page - 1) * PAGE_SIZE,
      order: {
        id: 'DESC',
      },
      where,
    });

    // const [products, count] = await this.productRepository
    //   .createQueryBuilder('product')
    //   .where('product.category_id = :category_id', { category_id: category_id })
    //   .limit(10)
    //   .getManyAndCount();

    return {
      count,
      page,
      category_id: category_id || null,
      page_size: PAGE_SIZE,
      products,
    };
  }

  async findOne(productId: number) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
      relations: {
        attributes: true,
        description: true,
      },
    });

    if (!product) throw new NotFoundException('product not found');

    return product;
  }

  async search(q: string) {
    const products = await this.productRepository.find({
      where: {
        product_name_ascii: Like(`%${generateId(q)}%`),
      },
    });

    if (products.length) return products;
    return [];
  }

  async create(createProductDto: CreateProductDto) {
    const item = new Product(createProductDto);
    const newProduct = await this.entityManager.save(item);

    // create description
    const description = new Description({
      content: newProduct.product_name,
      product_id: newProduct.id,
    });

    await this.descriptionRepository.save(description);

    return newProduct;
  }

  async update(updateDto: UpdateProductDto, id: number) {
    return await this.productRepository.update(id, updateDto);
  }

  async delete(id: number) {
    const product = await this.productRepository.findOne({
      where: { id },
    });

    if (!product) throw new NotFoundException('product not found');

    return await this.productRepository.delete({ id });
  }
}
