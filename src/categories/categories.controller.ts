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
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { updateCategoryDto } from './dto/update-category.dto';
import { filterDto } from './dto/filter.dto';
import { Category } from './entities/category.entity';
import { AuthGuard } from '@/auth/guards/auth.guard';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  create(@Body() createDto: CreateCategoryDto): Promise<Category> {
    return this.categoriesService.create(createDto);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  update(
    @Body() updateDto: updateCategoryDto,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    return this.categoriesService.update(updateDto, id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.categoriesService.delete(id);
  }
}
