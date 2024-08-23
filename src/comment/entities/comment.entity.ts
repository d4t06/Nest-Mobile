import { Product } from '@/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Comments' })
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ default: false })
  approved: boolean;

  @Column({ nullable: true })
  date_diff: string;

  @Column({ type: 'text' })
  content: string;

  //  ***
  @Column()
  product_id: number;

  @ManyToOne(() => Product, (p) => p.id, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;
  //  ***

  @CreateDateColumn()
  created_at: Date;


  constructor(item: Partial<Comment>) {
    Object.assign(this, item);
  }
}
