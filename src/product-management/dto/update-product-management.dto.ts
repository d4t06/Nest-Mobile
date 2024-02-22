import { PartialType } from '@nestjs/mapped-types';
import { CreateProductManagementDto } from './create-product-management.dto';

export class UpdateProductManagementDto extends PartialType(CreateProductManagementDto) {}
