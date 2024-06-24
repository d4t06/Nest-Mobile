import { Category } from '@/categories/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Brands' })
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand_name: string;

  @Column({ unique: true })
  brand_name_ascii: string;

  @Column()
  image_url: string;

  @Column()
  category_id: number;
  @ManyToOne(() => Category, (category) => category.brands, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  constructor(item: Partial<Brand>) {
    Object.assign(this, item);
  }
}
