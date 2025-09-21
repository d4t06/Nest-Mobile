import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateTagDto {
  @IsNotEmpty({ message: 'name is require' })
  name: string;

  @IsNotEmpty({ message: 'category_id is require' })
  @IsNumber()
  category_id: number;
}
