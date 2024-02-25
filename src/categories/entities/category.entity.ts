import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryAttribute } from './categoryAttribute.entity';
import { Product } from '@/products/entities/product.entity';

@Entity({ name: 'Categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category_name: string;

  @Column({ unique: true })
  category_ascii: string;

  @OneToMany(
    () => CategoryAttribute,
    // must reference column name in other table
    (categoryAttribute) => categoryAttribute.category,
    // not
    // (categoryAttribute) => categoryAttribute.category_id,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  attributes: CategoryAttribute[];

  @OneToMany(
    () => Product,
    // must reference column name in other table
    (product) => product.category,
    // not
    // (categoryAttribute) => categoryAttribute.category_id,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  products: Product[];

  @Column({ nullable: true })
  attributes_order: string;

  constructor(item: Partial<Category>) {
    Object.assign(this, item);
  }
}
