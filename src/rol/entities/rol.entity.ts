import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'rol'})
export class Rol {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('int', {nullable: false})
    business_id: number;

    @Column('text', {nullable: false})
    name: string;

    @Column('text', {nullable: false})
    description: string;
};
