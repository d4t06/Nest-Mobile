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
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { CreateProductAttributeDto } from './dto/create-productAttribute.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { filterDto } from '@/products/dto/filter.dto';
import { Product } from './entities/product.entity';
import { AuthGuard } from '@/auth/guards/auth.guard';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  // GET /products
  @Get()
  findAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('category_id', ParseIntPipe) category_id?: number,
  ) {
    return this.productService.findAll(page, category_id);
  }

  //  GET /products/:id
  @Get(':product_ascii')
  async findOne(
    @Param('product_ascii') product_ascii: string,
    @Query() filter: filterDto,
  ): Promise<Product> {
    if (filter.withCategory !== undefined)
      return await this.productService.findOneWithCategory(product_ascii);

    return await this.productService.findOne(product_ascii);
  }

  // POST /products
  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() product: CreateProductDto) {
    const newProduct = await this.productService.create(product);
    return newProduct;
  }

  // POST /products
  @Put(':id')
  async update(@Body() updateDto: UpdateProductDto, @Param('id') id: number) {
    const newProduct = await this.productService.update(updateDto, id);
    return newProduct;
  }

  // Delete /products
  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.productService.delete(id);
  }

  @Post('attributes')
  async createAttribute(@Body() createDto: CreateProductAttributeDto[]) {
    return await this.productService.createAttribute(createDto);
  }

  @Put('attributes/:id')
  async updateAttribute(
    @Param('id', ParseIntPipe) id: number,
    @Body() createDto: CreateProductAttributeDto,
  ) {
    return await this.productService.updateAttribute(createDto, id);
  }
}
