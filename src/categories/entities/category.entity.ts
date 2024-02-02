// import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { CategoryAttribute } from './categoryAttribute.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  //   @OneToMany(() => Product, (product) => product.id)
  //   @OneToMany(
  //     () => CategoryAttribute,
  //     (categoryAttribute) => categoryAttribute.category_id,
  //   )
  id: number;

  @Column()
  category_name: string;

  @Column({
    unique: true,
  })
  @Column({ default: false })
  represent: boolean;

  constructor(item: Partial<Category>) {
    Object.assign(this, item);
  }
}
