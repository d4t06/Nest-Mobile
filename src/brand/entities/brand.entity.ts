import { Category } from '@/categories/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'Brands' })
@Unique('check_unique_brand', ['category_id', 'brand_name_ascii'])
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand_name: string;

  @Column()
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
