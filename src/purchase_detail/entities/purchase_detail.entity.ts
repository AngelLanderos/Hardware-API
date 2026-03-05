import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'purchase_details'})
export class PurchaseDetail {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {nullable: false})
  purchase_id: number;

  @Column('int', {nullable: false})
  product_id: number;

  @Column('int', {nullable: false})
  quantity: number;

  @Column('numeric', {nullable: false})
  unit_price: number;

  @Column('numeric', {nullable: false})
  subtotal: number;
};
