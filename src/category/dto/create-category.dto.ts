import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateCategoryDto {

    @IsNumber()
   business_id: number; 
   
   @IsString()
   @MinLength(3)
   name: string;
   
   @IsString()
   @MinLength(3)
   description: string;

};
