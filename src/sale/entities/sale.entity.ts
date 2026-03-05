import { User } from "src/user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'sales'})
export class Sale {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int')
  business_id: number;

  @Column('int')
  branch_id: number;

  @Column('int', { nullable: true })
  client_id: number;

  @Column()
  user_id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id'})
  user: User;

  @Column('timestamp')
  sale_date: Date;

  @Column('numeric')
  total: number;

  @Column('timestamp')
  created_at: Date;

}
