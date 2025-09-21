import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserLikeProductDto {
  @IsNotEmpty({ message: 'product_id is required' })
  @IsNumber()
  product_id: number;

  @IsNotEmpty({ message: 'user_id is required' })
  @IsNumber()
  user_id: number;
}
