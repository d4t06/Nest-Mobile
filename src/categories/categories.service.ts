import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { EntityManager, Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { updateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly entityManager: EntityManager,
  ) {}

  async findAll() {
    const categories = await this.categoryRepository.find({
      relations: {
        brands: true,
        attributes: true,
      },
    });

    return categories;
  }

  async create(categoryDto: CreateCategoryDto) {
    const category = new Category(categoryDto);
    const newCategory = await this.entityManager.save(category);
    return newCategory;
  }

  async update(updateDto: updateCategoryDto, id: number) {
    await this.categoryRepository.update(id, updateDto);
  }

  async delete(id: number) {
    await this.categoryRepository.delete(id);
  }
}
