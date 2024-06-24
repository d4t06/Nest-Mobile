import { Module } from '@nestjs/common';
import { CategoryAttributeController } from './category-attribute.controller';
import { CategoryAttributeService } from './category-attribute.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryAttribute } from './entities/category-attribute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryAttribute])],
  controllers: [CategoryAttributeController],
  providers: [CategoryAttributeService],
})
export class CategoryAttributeModule {}
