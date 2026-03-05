import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'business_user'})
export class BusinessUser {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('int')
    business_user: number;

    @Column('int')
    user_id: number;

    @Column('int')
    branch_id: number;
    
    @Column('boolean')
    is_active: boolean;

};
