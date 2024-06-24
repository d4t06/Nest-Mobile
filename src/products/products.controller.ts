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
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { Product } from './entities/product.entity';
import { AuthGuard } from '@/auth/guards/auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  // GET /products
  @Get()
  findAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('category_id') category_id: number,
  ) {
    return this.productService.findAll(page, category_id);
  }

  // GET /products
  @Get('search')
  search(@Query('q') q: string) {
    return this.productService.search(q);
  }

  //  GET /products/:id
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return await this.productService.findOne(id);
  }

  // POST /products
  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  async create(@Body() product: CreateProductDto) {
    const newProduct = await this.productService.create(product);
    return newProduct;
  }

  // POST /products
  @Put(':id')
  @UseGuards(AuthGuard)
  async update(
    @Body() updateDto: UpdateProductDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const newProduct = await this.productService.update(updateDto, id);
    return newProduct;
  }

  // Delete /products
  @Delete(':id')
  @UseGuards(AuthGuard)
  async delete(@Param('id', ParseIntPipe) id: number) {
    await this.productService.delete(id);
  }
}
