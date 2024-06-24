import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Brand } from '@/brand/entities/brand.entity';
import { CategoryAttribute } from '@/category-attribute/entities/category-attribute.entity';

@Entity({ name: 'Categories' })
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category_name: string;

  @Column({ unique: true })
  category_name_ascii: string;

  @OneToMany(
    () => CategoryAttribute,
    // must reference column name in other table
    (categoryAttribute) => categoryAttribute.category,
    // not
    // (categoryAttribute) => categoryAttribute.category_id,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  )
  attributes: CategoryAttribute[];

  @OneToMany(() => Brand, (brand) => brand.category, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  brands: Brand[];

  // @OneToMany(
  //   () => Product,
  //   // must reference column name in other table
  //   (product) => product.category,
  //   // not
  //   // (categoryAttribute) => categoryAttribute.category_id,
  //   { onDelete: 'CASCADE', onUpdate: 'CASCADE' },
  // )
  // products: Product[];

  @Column({ nullable: true })
  attribute_order: string;

  constructor(item: Partial<Category>) {
    Object.assign(this, item);
  }
}
