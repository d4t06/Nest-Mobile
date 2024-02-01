import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  name: string;

  @Column({
    unique: true,
  })
  name_ascii: string;

  image_url: string;

  constructor(product: Partial<Product>) {
    Object.assign(this, product);
  }
}
