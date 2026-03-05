import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'categories'})
export class Category {
    @PrimaryGeneratedColumn('increment')
    id: number;
     
    @Column('int',{nullable: false})
    business_id: number;
    
    @Column('string',{nullable: false})
    name: string;

    @Column('string',{nullable: false})
    description: string;

};
