import { IsDate, IsInt, IsNumber, IsPositive } from "class-validator";

export class CreateSaleDto {
    @IsInt()
    @IsPositive()
    business_id: number;
    
    @IsInt()
    @IsPositive()
    branch_id: number;
    
    @IsInt()
    @IsPositive()
    client_id: number;
    
    @IsInt()
    @IsPositive()
    user_id:number;
    
    @IsDate()
    sale_date: Date;
    
    @IsNumber()
    @IsPositive()
    total: number;
    
    @IsDate()
    created_at: Date;
};
