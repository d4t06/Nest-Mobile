import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand-dto';
import { AuthGuard } from '@/auth/guards/auth.guard';
import { Roles } from '@/auth/decorators/roles.decorator';
import { Role } from '@/auth/decorators/role.enum';
import { RolesGuard } from '@/auth/guards/roles.guard';

@Controller('brands')

@UseGuards(AuthGuard, RolesGuard)
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  @Roles(Role.Admin)
  @UsePipes(ValidationPipe)
  create(@Body() body: CreateBrandDto) {
    return this.brandService.create(body);
  }

  @Put(':id')
  @Roles(Role.Admin)
  update(@Param('id', ParseIntPipe) id: number, @Body() body: CreateBrandDto) {
    return this.brandService.update(id, body);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.brandService.delete(id);
  }
}
