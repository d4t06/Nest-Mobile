import { IsNotEmpty } from 'class-validator';

export class CreateImageDto {
  @IsNotEmpty()
  image_url: string;

  @IsNotEmpty()
  public_id: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  size: number;
}
