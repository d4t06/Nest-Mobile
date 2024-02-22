import { Injectable } from '@nestjs/common';
import { CreateProductManagementDto } from './dto/create-product-management.dto';
import { UpdateProductManagementDto } from './dto/update-product-management.dto';

@Injectable()
export class ProductManagementService {
  create(createProductManagementDto: CreateProductManagementDto) {
    return 'This action adds a new productManagement';
  }

  findAll() {
    return `This action returns all productManagement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productManagement`;
  }

  update(id: number, updateProductManagementDto: UpdateProductManagementDto) {
    return `This action updates a #${id} productManagement`;
  }

  remove(id: number) {
    return `This action removes a #${id} productManagement`;
  }
}
