import { Category } from 'src/categories/entities/category.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_name: string;

  @Column({ unique: true })
  product_ascii: string;

  @Column({ nullable: true })
  image_url: string;

  @ManyToOne(() => Category, (category) => category.id, {
    cascade: true,
  })
  category_id: number;

  constructor(product: Partial<Product>) {
    Object.assign(this, product);
  }
}
