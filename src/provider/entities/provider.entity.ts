import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'providers'})
export class Provider {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('int', {nullable: false})
    business_id: number;

    @Column('int', {nullable: false})
    name: string;

    @Column('varchar', {nullable: false})
    phone: string;
    
    @Column('varchar', {nullable: false})
    email:string;
    
    @Column('varchar', {nullable: false})
    address: string;
};
