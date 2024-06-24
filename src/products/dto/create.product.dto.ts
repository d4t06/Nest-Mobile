import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'product_name is required' })
  product_name: string;

  @IsNotEmpty({ message: 'product_name_ascii is required' })
  product_name_ascii: string;

  @IsNotEmpty({ message: 'category_id is required' })
  category_id: number;

  @IsNotEmpty({ message: 'brand_id is required' })
  brand_id: number;

  image_url: string;
}
