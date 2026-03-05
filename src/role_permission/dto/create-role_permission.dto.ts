import { IsNumber } from "class-validator";

export class CreateRolePermissionDto {
    @IsNumber()
    role_id: number;
    
    @IsNumber()
    permision_id: number;
};
