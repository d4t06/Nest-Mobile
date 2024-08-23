import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateBrandDto {
  @IsNotEmpty({ message: 'brand_name is required' })
  brand_name: string;

  @IsNotEmpty({ message: 'brand_name_ascii is required' })
  brand_name_ascii: string;

  @IsNotEmpty({ message: 'category_id is required' })
  @IsNumber()
  category_id: number;

  image_url: string;

  constructor(item: Partial<CreateBrandDto>) {
    Object.assign(this, item);
  }
}
