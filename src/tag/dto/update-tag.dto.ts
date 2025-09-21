import { IsNotEmpty } from 'class-validator';

export class UpdateTagDto {
  @IsNotEmpty({ message: 'name is require' })
  name: string;
}
