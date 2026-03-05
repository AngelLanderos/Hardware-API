import { IsEmail, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateProviderDto {    
    @IsNumber()
    @IsPositive()
    business_id: number;
    
    @IsString()
    name: string;
    
    @IsString()
    phone: string;
    
    @IsString()
    @IsEmail()
    email: string;
    
    @IsString()
    address: string;
};
