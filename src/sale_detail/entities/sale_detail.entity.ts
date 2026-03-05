import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'sale_details'})
export class SaleDetail {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {nullable: false})
  sale_id: number; 

  @Column('int', {nullable: false})
  product_id: number;
  
  @Column('int', {nullable: false})
  quantity: number;
  
  @Column('numeric', {nullable: false})
  unit_price : number
  
  @Column('numeric', {nullable: false})
  subtotal : number
};
