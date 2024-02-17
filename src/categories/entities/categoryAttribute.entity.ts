import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Category } from '@/categories/entities/category.entity';

@Entity({ name: 'Category_Attributes' })
@Unique('check_unique', ['category_id', 'attribute_ascii'])
export class CategoryAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  // ***
  @Column()
  category_id: number;

  @ManyToOne(() => Category, (category) => category.attributes, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category: Category;
  // ***

  @Column()
  attribute_ascii: string;

  @Column()
  attribute_name: string;

  @Column({ default: false })
  represent: boolean;

  constructor(item: Partial<CategoryAttribute>) {
    Object.assign(this, item);
  }
}
