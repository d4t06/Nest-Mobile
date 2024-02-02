import { Category } from 'src/categories/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductAttribute } from './productAttribute.entity';

@Entity({ name: 'Products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_name: string;

  @Column({ unique: true })
  product_ascii: string;

  @Column({ nullable: true })
  image_url: string;

  // ***
  @Column()
  category_id: number;

  @ManyToOne(() => Category, (c) => c.id)
  // this is the fk column name
  // must matches column name above
  @JoinColumn({ name: 'category_id' })
  // this is the alias column name
  category: Category;
  // ***

  @OneToMany(
    () => ProductAttribute,
    (productAttribute) => productAttribute.product,
    { cascade: true },
  )
  attributes: ProductAttribute[];

  constructor(product: Partial<Product>) {
    Object.assign(this, product);
  }
}
