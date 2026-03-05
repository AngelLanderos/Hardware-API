import { IsDataURI, IsDate, IsEmail, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateClientDto {

    @IsNumber()
    business_id: number;

    @IsString()
    first_name: string;
    
    @IsString()
    last_name: string;
    
    @IsString()
    @IsEmail()
    email: string;
    
    @IsString()
    phone: string;
    
    @IsString()
    address: string;
    
    @IsDate()
    created_at: Date;
    
    @IsDate()
    @IsOptional()
    updated_at: Date;
};
