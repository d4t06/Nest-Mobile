import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Product } from './product.entity';
import { CategoryAttribute } from '@/categories/entities/categoryAttribute.entity';

@Entity({ name: 'Product_Attributes' })
@Unique('check_unique',['category_attribute_id', 'product_id'])
export class ProductAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  // ***
  @Column()
  product_id: number;

  @ManyToOne(() => Product, (p) => p.id)
  @JoinColumn({ name: 'product_id' })
  product: Product;
  // ***

  // ***
  @Column()
  category_attribute_id: number;

  @ManyToOne(() => CategoryAttribute, (cA) => cA.id)
  @JoinColumn({ name: 'category_attribute_id' })
  category_attribute: string;
  // ***
  
  @Column({ type: 'text' })
  value: string;
  


  constructor(item: Partial<ProductAttribute>) {
    Object.assign(this, item);
  }
}
