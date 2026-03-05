import { IsNumber, IsString, MinLength } from "class-validator";

export class CreateRolDto {
    @IsNumber()
    business_id: number;
    
    @IsString()
    @MinLength(5)
    name: string;
    
    @IsString()
    @MinLength(5)
    description: string;
};
