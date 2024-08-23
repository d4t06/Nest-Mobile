import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductAttributeDto {
  @IsNotEmpty({ message: 'product_id is required' })
  @IsNumber()
  product_id: number;

  @IsNotEmpty({ message: 'category_attribute_id is required' })
  @IsNumber()
  category_attribute_id: number;

  value: string;
}
