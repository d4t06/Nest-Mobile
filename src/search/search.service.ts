import { Product } from '@/products/entities/product.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async search(q: string) {
    console.log('>>> check q', q);
    const products = await this.productRepository.find({
      where: {
        product_ascii: Like(`%${q}%`),
      },
      select: {
        category: {
          category_ascii: true,
        },
      },
      relations: {
        category: true,
      },
    });

    if (!products.length) throw new NotFoundException();

    return products;
  }
}
