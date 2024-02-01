


import { IsNotEmpty } from 'class-validator'

export class CreateProductDto {
   @IsNotEmpty()
   name: string;

   @IsNotEmpty()
   name_ascii: string;
   
   image_url: string;
}