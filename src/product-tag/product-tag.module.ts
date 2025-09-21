import { Module } from '@nestjs/common';
import { ProductTagService } from './product-tag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductTag } from './entities/product-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductTag])],
  providers: [ProductTagService],
})
export class ProductTagModule {}
