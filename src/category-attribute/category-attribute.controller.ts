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
import { Roles } from '@/auth/decorators/roles.decorator';
import { Role } from '@/auth/decorators/role.enum';
import { RolesGuard } from '@/auth/guards/roles.guard';

@Controller('category-attributes')
@UseGuards(AuthGuard, RolesGuard)
export class CategoryAttributeController {
  constructor(
    private readonly categoryAttributeService: CategoryAttributeService,
  ) {}

  @Post('')
  @Roles(Role.Admin)
  create(@Body() createDto: CreateCategoryAttributeDto) {
    return this.categoryAttributeService.create(createDto);
  }

  @Put(':id')
  @Roles(Role.Admin)
  updateAttribute(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateCategoryAttributeDto,
  ) {
    return this.categoryAttributeService.update(updateDto, id);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  deleteAttribute(@Param('id') id: number) {
    return this.categoryAttributeService.delete(id);
  }
}
