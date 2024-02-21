import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { EntityManager, Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryAttributeDto } from './dto/create-categoryAttribute.dto';
import { CategoryAttribute } from './entities/categoryAttribute.entity';
import { updateCategoryAttributeDto } from './dto/update-categoryAttribute.dto';
import { updateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryAttribute)
    private readonly categoryAttributeRepository: Repository<CategoryAttribute>,

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
    private readonly entityManager: EntityManager,
  ) {}

  async findAll() {
    return this.categoryRepository.find({
      relations: {
        attributes: true,
      },
    });
  }

  async create(categoryDto: CreateCategoryDto) {
    const category = new Category(categoryDto);
    const newCategory = await this.entityManager.save(category);
    return newCategory;
  }

  async update(updateDto: updateCategoryDto, id: number) {
    console.log(updateDto);
    await this.categoryRepository.update(id, updateDto);
  }

  async delete(id: number) {
    await this.categoryRepository.delete(id);
  }

  async createAttribute(categoryAttributeDto: CreateCategoryAttributeDto) {
    const categoryAttribute = new CategoryAttribute(categoryAttributeDto);
    const newCategoryAttribute =
      await this.entityManager.save(categoryAttribute);

    return newCategoryAttribute;
  }

  async updateAttribute(
    updateAttributeDto: updateCategoryAttributeDto,
    id: number,
  ) {
    await this.categoryAttributeRepository.update(id, updateAttributeDto);
  }

  async deleteAttribute(id: number) {
    await this.categoryAttributeRepository.delete(id);
  }
}
