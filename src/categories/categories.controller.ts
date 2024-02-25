import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CreateCategoryAttributeDto } from './dto/create-categoryAttribute.dto';
import { updateCategoryAttributeDto } from './dto/update-categoryAttribute.dto';
import { updateCategoryDto } from './dto/update-category.dto';
import { filterDto } from './dto/filter.dto';
import { Category } from './entities/category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll(@Query() filter: filterDto): Promise<Category[]> {
    if (filter.hasOwnProperty('withAttributes')) {
      return this.categoriesService.findAllWithAttributes();
    }
    if (filter.hasOwnProperty('withProducts')) {
      return this.categoriesService.findAllWithProducts();
    }

    return this.categoriesService.findAll();
  }

  @Get(':category_ascii')
  findOne(@Param('category_ascii') category_ascii: string): Promise<Category> {
    return this.categoriesService.findOne(category_ascii);
  }

  @Post()
  create(@Body() createDto: CreateCategoryDto): Promise<Category> {
    return this.categoriesService.create(createDto);
  }

  @Put(':id')
  update(
    @Body() updateDto: updateCategoryDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    return this.categoriesService.update(updateDto, id);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.categoriesService.delete(id);
  }

  @Post('attributes')
  createAttribute(@Body() createDto: CreateCategoryAttributeDto) {
    return this.categoriesService.createAttribute(createDto);
  }

  @Put('attributes/:id')
  updateAttribute(
    @Param('id') id: number,
    @Body() updateDto: updateCategoryAttributeDto,
  ) {
    return this.categoriesService.updateAttribute(updateDto, id);
  }

  @Delete('attributes/:id')
  deleteAttribute(@Param('id') id: number) {
    return this.categoriesService.deleteAttribute(id);
  }
}
