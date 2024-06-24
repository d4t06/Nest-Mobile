import { IsNotEmpty } from 'class-validator';

export class UpdateDescriptionDto {
  @IsNotEmpty({ message: 'content is required' })
  content: string;
}
