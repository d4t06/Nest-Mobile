import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductTagDto {
  @IsNotEmpty({ message: 'product_id is required' })
  @IsNumber()
  product_id: number;

  @IsNotEmpty({ message: 'tag_id is required' })
  @IsNumber()
  tag_id: number;
}
