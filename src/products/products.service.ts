import {
  BadRequestException,
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
import { ProductTag } from '@/product-tag/entities/product-tag.entity';
import { CreateProductTagDto } from '@/product-tag/dto/create-product-tag.dto';
import { CreateUserLikeProductDto } from '@/user-like-product/dto/create-user-like-product.dto';
import { UserLikeProduct } from '@/user-like-product/entities/user-like-product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(Description)
    private readonly descriptionRepository: Repository<Description>,

    @InjectRepository(ProductTag)
    private readonly productTagRepository: Repository<ProductTag>,

    @InjectRepository(UserLikeProduct)
    private readonly userLikeProductRepository: Repository<UserLikeProduct>,

    private readonly entityManager: EntityManager,
  ) {}

  public pageSize = +process.env.PAGE_SIZE || 6;

  async findAll(page: string, category_id: string, brand_id: string) {
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
      relations: {
        product_tags: {
          tag: true,
        },
      },
    });

    return {
      count,
      page: _page,
      category_id: +category_id || null,
      brand_id: +brand_id || null,
      page_size: this.pageSize,
      products,
    };
  }

  async findAllOfTag(page: string, tag_id: string) {
    const where: FindOptionsWhere<ProductTag> = {};

    const _page = page && +page ? +page : 1;

    if (tag_id && +tag_id) where.tag_id = +tag_id;
    else throw new BadRequestException();

    const [productTags, count] = await this.productTagRepository.findAndCount({
      take: this.pageSize,
      skip: (_page - 1) * this.pageSize,
      where,
      relations: {
        product: {
          product_tags: {
            tag: true,
          },
        },
      },
    });

    return {
      count,
      page: _page,
      page_size: this.pageSize,
      products: productTags.map((pT) => pT.product),
    };
  }

  async findOne(productId: number) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
      relations: {
        attributes: true,
        description: true,
        product_tags: {
          tag: true,
        },
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
      relations: {
        product_tags: {
          tag: true,
        },
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
    await this.productRepository.update(id, updateDto);
    return 'ok';
  }

  async addTag(data: CreateProductTagDto[]) {
    return await this.productTagRepository.save(data);
  }

  async removeTag(data: CreateProductTagDto) {
    this.productTagRepository.delete(data);
    return 'ok';
  }

  async likeProduct(data: CreateUserLikeProductDto) {
    await this.userLikeProductRepository.save(data);
    return 'ok';
  }

  async unlikeProduct(data: CreateUserLikeProductDto) {
    await this.userLikeProductRepository.delete(data);
    return 'ok';
  }

  async delete(id: number) {
    const product = await this.productRepository.findOne({
      where: { id },
    });

    if (!product) throw new NotFoundException('product not found');

    await this.productRepository.delete({ id });
    return 'ok';
  }

  async getLikeProduct(user_id: number) {
    return await this.userLikeProductRepository.find({
      where: { user_id },
      relations: {
        product: {
          product_tags: {
            tag: true,
          },
        },
      },
    });
  }
}
