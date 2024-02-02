import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { CategoryAttribute } from './entities/categoryAttribute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryAttribute])],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
