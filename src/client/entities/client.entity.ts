import { Column, Entity } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm/browser";

@Entity({ name: 'clients'})
export class Client {
   
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('int', {nullable: false})
    business_id: number;

    @Column('text', {nullable: false})
    first_name: string;

    @Column('text', {nullable: false})
    last_name: string;

    @Column('text', {nullable: false})
    email: string;

    @Column('text', {nullable: false})
    phone: string;

    @Column('text', {nullable: false})
    address: string;

    @Column('date', {nullable: false})
    created_at: Date;

    @Column('date', {nullable: true})
    updated_at: Date;
};
