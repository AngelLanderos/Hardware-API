import { IsString, MinLength } from "class-validator";

export class CreatePermissionDto {
    @IsString()
    @MinLength(3)
    code: string;

    @IsString()
    @MinLength(3)
    module: string;
    
    @IsString()
    @MinLength(5)
    description: string;
};
