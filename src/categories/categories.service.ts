import { Injectable, Query } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { EntityManager, Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryAttributeDto } from './dto/create-categoryAttribute.dto';
import { CategoryAttribute } from './entities/categoryAttribute.entity';
import { updateCategoryAttributeDto } from './dto/update-categoryAttribute.dto';
import { updateCategoryDto } from './dto/update-category.dto';
import { Product } from '@/products/entities/product.entity';
import { filterDto } from './dto/filter.dto';

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
    return await this.entityManager
      .createQueryBuilder(Category, 'category')
      .getMany();
  }

  async findOne(category_ascii: string) {
    return await this.categoryRepository
      .createQueryBuilder('category')
      .leftJoinAndSelect('category.attributes', 'attributes')
      .where('category.category_ascii = :category_ascii', { category_ascii })
      .getOne();
  }

  async findAllWithProducts() {
    const categories = await this.entityManager
      .createQueryBuilder(Category, 'category')
      .getMany();
    for await (let cat of categories) {
      const products = await this.entityManager
        .createQueryBuilder(Product, 'product')
        .where('category_id = :category_id', { category_id: cat.id })
        .limit(5)
        .getMany();

      cat['products'] = products;
    }
    return categories;
  }

  async findAllWithAttributes() {
    const categories = await this.entityManager
      .createQueryBuilder(Category, 'category')
      .leftJoinAndSelect('category.attributes', 'attributes')
      .getMany();

    return categories;
  }

  async create(categoryDto: CreateCategoryDto) {
    const category = new Category(categoryDto);
    const newCategory = await this.entityManager.save(category);
    return newCategory;
  }

  async update(updateDto: updateCategoryDto, id: number) {
    // console.log(updateDto);
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
    // const attribute = await this.categoryAttributeRepository.findOne({
    //   where: { id },
    // });

    // const category = await this.categoryRepository.findOne({where: {id: attribute.category_id}})
    // const currentAttrOrder = category.attributes_order

    // if (category.attributes_order.includes(`_${}`))
    // const newAttrOrder = category.attributes_order.replace(`_attribute.attribute_ascii`, '')

    await this.categoryAttributeRepository.delete(id);
  }
}
