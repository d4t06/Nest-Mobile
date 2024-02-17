import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CreateCategoryAttributeDto } from './dto/create-categoryAttribute.dto';
import { updateCategoryAttributeDto } from './dto/update-categoryAttribute.dto';
import { updateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Post()
  create(@Body() createDto: CreateCategoryDto) {
    return this.categoriesService.create(createDto);
  }

  @Put(':id')
  update(
    @Body() updateDto: updateCategoryDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.categoriesService.update(updateDto, id);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
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
