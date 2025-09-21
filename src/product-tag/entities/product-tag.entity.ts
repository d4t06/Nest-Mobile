import { Product } from '@/products/entities/product.entity';
import { Tag } from '@/tag/entities/tag.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Product_Tags' })
export class ProductTag {
	@PrimaryColumn()
	product_id: number;
	@ManyToOne(() => Product, (p) => p.id, {
		onDelete: 'CASCADE',
	})
	@JoinColumn({ name: 'product_id' })
	product: Product;

	@PrimaryColumn()
	tag_id: number;
	@ManyToOne(() => Tag, (t) => t.id, {
		onDelete: 'CASCADE',
	})
	@JoinColumn({ name: 'tag_id' })
	tag: Tag;
}
