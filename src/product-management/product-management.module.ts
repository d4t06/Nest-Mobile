import { Module } from '@nestjs/common';
import { ProductManagementService } from './product-management.service';
import { ProductManagementController } from './product-management.controller';

@Module({
  controllers: [ProductManagementController],
  providers: [ProductManagementService],
})
export class ProductManagementModule {}
