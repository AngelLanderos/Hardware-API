import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number; 

    @Column('int', {nullable: false})
    employee_id: number;

    @Column('int', {nullable: false})
    business_id: number;

    @Column('text', {nullable: false})
    first_name: string;
    
    @Column('text',{nullable: false})
    last_name: string;

    @Column('text',{nullable: false})
    emial: string;

    @Column('text',{nullable: true})
    password: string;

    @Column('boolean',{nullable: false})
    is_active: boolean;

    @Column('int',{nullable: false})
    role_id: number;

    @Column('date', {nullable: false, default: new Date()})
    created_at: Date;

    @Column('date', {nullable: true})
    updated_at: Date;
};

