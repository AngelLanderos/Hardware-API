import { Category } from "src/category/entities/category.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'products' })
export class Product {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('int',{nullable: false})
    business_id: number;

    @Column('varchar',{nullable: false})
    name: string;
    
    @Column('varchar',{nullable: false})
    SKU: string;
    
    @Column('varchar',{nullable: false})
    description: string;
    
    @Column('numeric',{nullable: false})
    sales_price: number;

    @Column('numeric',{nullable: false})
    cost: number;

    @Column('int',{nullable: false})
    stock: number;

    @Column('int',{nullable: false})
    minimum_stock: number;
    
    @ManyToOne(() => Category) //Crea la llave foranea y una columna física
    @JoinColumn({ name: 'category_id' }) //La columna se llamara category_id
    category: Category; //Define el tipo de relación en el modelo de objetos

    @Column('int',{nullable: false})
    created_by: number;

    @Column('date',{nullable: false})
    created_at: Date;

    @Column('date',{nullable: true})
    update_at: Date;
};
