import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '@/categories/entities/category.entity';

@Entity()
export class CategoryAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  @ManyToOne(() => Category, (category) => category.id, {
    cascade: true,
  })
  category_id: number;

  @PrimaryColumn()
  attribute_ascii: string;

  @Column()
  attribute_name: string;
}
