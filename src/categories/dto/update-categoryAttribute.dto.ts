import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryAttributeDto } from './create-categoryAttribute.dto';

export class updateCategoryAttributeDto extends PartialType(
  CreateCategoryAttributeDto,
) {}
