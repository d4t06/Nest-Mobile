import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateProductDto } from './dto/update.product.dto';
import { CreateProductDto } from './dto/create.product.dto';
import { EntityManager, FindOptionsWhere, Like, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Description } from '@/description/entities/description.entity';
import { generateId } from '@/utils/apphelper';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Description)
    private readonly descriptionRepository: Repository<Description>,

    private readonly entityManager: EntityManager,
  ) {}


  public pageSize = +process.env.PAGE_SIZE || 6;

  async findAll(page: number, category_id: string, brand_id: string) {

    const where: FindOptionsWhere<Product> = {};

    if (category_id && +category_id) where.category_id = +category_id;
    if (brand_id && +brand_id) where.brand_id = +brand_id;

    const _page = page && +page ? +page : 1;

    const [products, count] = await this.productRepository.findAndCount({
      take: this.pageSize,
      skip: (_page - 1) * this.pageSize,
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
      page: _page,
      category_id: +category_id || null,
      brand_id: +brand_id || null,
      page_size: this.pageSize,
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
    const foundedProduct = await this.productRepository.findOne({
      where: { product_name_ascii: createProductDto.product_name_ascii },
    });

    if (foundedProduct) throw new ConflictException('Product name had taken');

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
