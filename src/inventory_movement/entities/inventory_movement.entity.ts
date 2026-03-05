import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'inventory_movements' })
export class InventoryMovement {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', { nullable: false })
  business_id: number;

  @Column('int', { nullable: false })
  branch_id: number;

  @Column('int', { nullable: false })
  product_id: number;
  
  @Column('varchar', { nullable: false })
  reference_type: string; // SALE, PURCHASE, ADJUSTMENT

  @Column('int', { nullable: false })
  reference_id: number;

  @Column('int', { nullable: false })
  quantity: number;

  @Column('timestamp', { nullable: false })
  movement_date: Date;
};
