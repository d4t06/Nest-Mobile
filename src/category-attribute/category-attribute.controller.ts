import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CategoryAttributeService } from './category-attribute.service';
import { CreateCategoryAttributeDto } from './dto/create.category-attribute.dto';
import { UpdateCategoryAttributeDto } from './dto/update.category-attribute.dto';
import { AuthGuard } from '@/auth/guards/auth.guard';

@Controller('category-attributes')
export class CategoryAttributeController {
  constructor(
    private readonly categoryAttributeService: CategoryAttributeService,
  ) {}

  @Post('')
  @UseGuards(AuthGuard)
  create(@Body() createDto: CreateCategoryAttributeDto) {
    return this.categoryAttributeService.create(createDto);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  updateAttribute(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateCategoryAttributeDto,
  ) {
    return this.categoryAttributeService.update(updateDto, id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteAttribute(@Param('id') id: number) {
    return this.categoryAttributeService.delete(id);
  }
}
