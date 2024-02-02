import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  // GET /products
  @Get()
  findAll(
    @Query('category_id', ParseIntPipe) category_id: number,
    @Query('page', ParseIntPipe) page: number,
  ) {
    return this.productService.findAll(category_id, page);
  }

  //  GET /products/:id
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const product = await this.productService.findOne(id);
    if (!product) throw new NotFoundException('Not found');
    return product;
  }

  // POST /products
  @Post()
  async create(@Body() product: CreateProductDto) {
    const newProduct = await this.productService.create(product);
    return newProduct
  }
}
