import { IsNotEmpty } from 'class-validator';

export class CreateDescriptionDto {
  @IsNotEmpty({ message: 'product_id is required' })
  product_id: number;
  @IsNotEmpty({ message: 'content is required' })
  content: string;

  constructor(item: Partial<CreateDescriptionDto>) {
    Object.assign(this, item);
  }
}
