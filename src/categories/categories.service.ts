import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { EntityManager, Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryAttributeDto } from './dto/create-categoryAttribute.dto';
import { CategoryAttribute } from './entities/categoryAttribute.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly entityManager: EntityManager,
  ) {}

  async findAll() {
    return this.categoryRepository.find({
      relations: {
        attributes: true
      }
    });
  }

  async create(categoryDto: CreateCategoryDto) {
    const category = new Category(categoryDto);
    const newCategory = await this.entityManager.save(category);
    return newCategory;
  }


  async createAttribute(categoryAttributeDto: CreateCategoryAttributeDto) {
    const categoryAttribute = new CategoryAttribute(categoryAttributeDto);
    const newCategoryAttribute = await this.entityManager.save(categoryAttribute);
    return newCategoryAttribute;
  }
}
