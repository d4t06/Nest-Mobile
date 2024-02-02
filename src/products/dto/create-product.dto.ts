


import { IsNotEmpty } from 'class-validator'

export class CreateProductDto {
   @IsNotEmpty()
   product_name: string;

   @IsNotEmpty()
   name_ascii: string;
   
   image_url: string;
}