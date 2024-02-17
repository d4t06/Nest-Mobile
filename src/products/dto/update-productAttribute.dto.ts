import { PartialType } from '@nestjs/mapped-types';
import { CreateProductAttributeDto } from './create-productAttribute.dto';

export class UpdateProductAttributeDto extends PartialType(CreateProductAttributeDto) {}
