import { Entity } from "typeorm";

@Entity({ name: 'role_permissions'})
export class RolePermission {
    
    //Relaciones
    role_id: number;
    permission_id: number;
};
