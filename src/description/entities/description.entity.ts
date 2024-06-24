import { Product } from '@/products/entities/product.entity';
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Descriptions' })
export class Description {
  @PrimaryColumn()
  product_id: number;
  
  @OneToOne(() => Product, (p) => p.description, {
    onDelete: "CASCADE"
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @Column({ type: 'text' })
  content: string;

  constructor(data: Partial<Description>) {
    Object.assign(this, data);
  }
}
