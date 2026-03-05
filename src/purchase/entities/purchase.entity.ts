import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'purchases'})
export class Purchase {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {nullable: false})
  business_id: number;

  @Column('int', {nullable: false})
  branch_id: number;

  @Column('int', {nullable: false})
  provider_id: number;

  @Column('int', {nullable: false})
  user_id: number;

  @Column('timestamp', {nullable: false})
  purchase_date: Date;

  @Column('numeric', {nullable: false})
  total: number;

   @Column('timestamp', {nullable: false})
  created_at: Date; 
};
