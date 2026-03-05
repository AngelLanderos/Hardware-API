import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'business' })
export class Business {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { nullable: false })
    name: string;

    @Column('varchar', { nullable: false })
    email: string;

    @Column('varchar', { nullable: false })
    phone: string;

    @Column('varchar', { nullable: false })
    address: string;

    @Column('timestamp', { nullable: false })
    created_at: Date;
};
