import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'permissions'})
export class Permission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text',{nullable: false})
    code: string;
    
    @Column('text',{nullable: false})
    module: string;

    @Column('text',{nullable: false})
    description: string;
};
