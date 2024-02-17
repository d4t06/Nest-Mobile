


import { IsNotEmpty } from 'class-validator'

export class CreateProductAttributeDto {
   @IsNotEmpty()
   product_id: number;

   @IsNotEmpty()
   category_attribute_id: number;

   value: string
   
}