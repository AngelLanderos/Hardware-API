import { IsBoolean, IsNumber, IsPositive } from "class-validator";

export class CreateBusinessUserDto {
    @IsNumber()
    @IsPositive()
    business_id: number;
    
    @IsNumber()
    @IsPositive()
    user_id: number;
    
    @IsNumber()
    @IsPositive()
    branch_id: number;

    @IsBoolean()
    is_active: boolean;
};
