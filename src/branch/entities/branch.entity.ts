import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'branches'})
export class Branch {
  @PrimaryGeneratedColumn('increment')
  id: number; 

  @Column('int', { nullable: false })
  business_id: number;

  @Column('varchar', { nullable: false })
  name: string;

  @Column('varchar', { nullable: false })
  address: string;

  @Column('timestamp', { nullable: false })
  created_at: Date; 
};
