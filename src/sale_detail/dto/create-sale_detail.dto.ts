import { IsInt, IsNumber, IsPositive } from "class-validator";

export class CreateSaleDetailDto {
  @IsInt()
  @IsPositive()
  sale_id: number; 

  @IsInt()
  @IsPositive()
  product_id: number;

  @IsInt()
  @IsPositive()
  quantity: number;
  
  @IsNumber()
  @IsPositive()
  unit_price : number;

  @IsNumber()
  @IsPositive()
  subtotal : number;
}
