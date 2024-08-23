import { IsNotEmpty, IsNumber } from "class-validator";


export class CreateCommentDto {
   @IsNotEmpty({ message: 'product_id is required' })
   @IsNumber()
   product_id: number;

   @IsNotEmpty({ message: 'username is required' })
   username: string;

   @IsNotEmpty({ message: 'content is required' })
   content: string;
}