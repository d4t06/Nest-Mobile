import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Description } from './entities/description.entity';
import { Repository } from 'typeorm';
import { UpdateDescriptionDto } from './dto/update.description.dto';

@Injectable()
export class DescriptionService {
  constructor(
    @InjectRepository(Description)
    private readonly descriptionRepository: Repository<Description>,
  ) {}

  async update(productId: number, dto: UpdateDescriptionDto) {
    const product = await this.descriptionRepository.findOneBy({
      product_id: productId,
    });
    if (!product) throw new NotFoundException();

    product.content = dto.content;

    this.descriptionRepository.save(product);
  }
}
