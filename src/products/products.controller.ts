import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  // GET /products
  @Get()
  findAll(): string {
    return this.productService.findAll();
  }

  //  GET /products/:id
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): string {
    return this.productService.findOne(id);
  }

  // POST /products
  @Post()
  create(@Body() product: CreateProductDto) {
    return this.productService.create(product);
  }
}
