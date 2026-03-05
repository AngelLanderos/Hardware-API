import { IsInt, IsNumber } from "class-validator";

export class CreatePurchaseDetailDto {
  @IsInt()
  purchase_id: number;

  @IsInt()
  product_id: number;

  @IsInt()
  quantitynumber: number;

  @IsNumber()
  unit_price: number;

  @IsNumber()
  subtotal: number;
};
