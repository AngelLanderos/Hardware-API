import { IsDate, IsIn, IsNumber, IsPositive } from "class-validator";
import { In } from "typeorm";

export class CreateInventoryMovementDto {
  @IsNumber()
  @IsPositive()
  business_id: number;
  
  @IsNumber()
  @IsPositive()
  branch_id: number;
  
  @IsNumber()
  @IsPositive()
  product_id: number;

  @IsIn(['SALE','PURCHASE','ADJUSTMENT'])
  reference_type: string; // SALE, PURCHASE, ADJUSTMENT

  @IsNumber()
  @IsPositive()
  reference_id: number;
  
  @IsNumber()
  @IsPositive()
  quantity: number;
  
  @IsDate()
  movement_date: Date;
};
