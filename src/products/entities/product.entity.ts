import { Category } from 'src/categories/entities/category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Timestamp,
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

  // @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  // created_at: string;

  // ***
  @Column()
  category_id: number;
  @ManyToOne(() => Category, (c) => c.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })

  // this is the fk column name
  // must matches column name above
  @JoinColumn({ name: 'category_id' })
  // this is the alias column name
  category: Category;

  // ***
  @OneToMany(
    () => ProductAttribute,
    (productAttribute) => productAttribute.product,
  )
  attributes: ProductAttribute[];

  @CreateDateColumn()
  created_at: Date;

  constructor(product: Partial<Product>) {
    Object.assign(this, product);
  }
}
