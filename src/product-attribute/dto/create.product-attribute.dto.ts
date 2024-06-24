import { IsNotEmpty } from 'class-validator';

export class CreateProductAttributeDto {
  @IsNotEmpty({ message: 'product_id is required' })
  product_id: number;

  @IsNotEmpty({ message: 'category_attribute_id is required' })
  category_attribute_id: number;

  value: string;
}
