import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { EntityManager } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(private readonly entityManager: EntityManager) {}
  findAll() {
    return 'get all category';
  }

  async create(categoryDto: CreateCategoryDto) {
    const category = new Category(categoryDto);
    const newCategory = await this.entityManager.save(category);
    return newCategory;
  }
}
