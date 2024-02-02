import {
  Column,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';
import { CategoryAttribute } from '@/categories/entities/categoryAttribute.entity';

@Entity()
export class ProductAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  @ManyToOne(() => Product, (product) => product.id, {
    cascade: true,
  })
  product_id: number;

  @PrimaryColumn()
  @ManyToOne(() => CategoryAttribute, (product) => product.id, {
    cascade: true,
  })
  category_attribute_id: number;

  @Column({ type: 'text' })
  value: string;
}
