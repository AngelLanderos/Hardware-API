import { Entity } from "typeorm";

@Entity( { name: 'user_role' } )
export class UserRole {
    //TODO: Relaciones
    user_id: number;

    role_id: number;
    
    business_id: number;
    
    branch_id: number;
};
