import { IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";


export class CreateProductDto {
    @IsString()
    @MinLength(3)
    name: string;
    
    @IsString()
    SKU: string;
    
    @IsNumber()
    bussiness_id: number;
    
    @IsString()
    @MinLength(3)
    description: string;
    
    @IsNumber()
    @IsPositive()
    sales_price: number;
    
    @IsNumber()
    @IsPositive()
    cost: number;
    
    @IsNumber()
    @Min(0)
    stock: number;
    
    @IsNumber()
    @IsPositive()
    minimum_stock: number;
    
    @IsNumber()
    created_by: number;
    
    @IsNumber()
    category_id: number;
};
