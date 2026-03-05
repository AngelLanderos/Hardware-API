import { IsBoolean, IsDate, IsNumber, IsPositive, IsString } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateUserDto {
    
    @IsNumber()
    @IsPositive()
    employee_id: number;
    
    @IsNumber()
    @IsPositive()
    business_id: number;
 
    @IsString()
    fist_name: string;
    
    @IsString()
    last_name: string;
    
    @IsString()
    emial: string;
    
    @IsString()
    password: string;
    
    @IsBoolean()
    is_active: boolean;
    
    @IsNumber()
    @IsPositive()
    role_id: number;
    
    @IsDate()
    created_at: Date; 
};
