import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'category_name is required' })
  category_name: string;
  @IsNotEmpty({ message: 'category_name_acsii is required' })
  category_name_ascii: string;
  attribute_order: string;
}
