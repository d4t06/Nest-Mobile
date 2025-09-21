// import { Product } from '@/products/entities/product.entity';
import { Product } from '@/products/entities/product.entity';
import { User } from '@/users/entities/user.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'User_Like_Products' })
export class UserLikeProduct {
	@PrimaryColumn()
	product_id: number;
	@ManyToOne(() => Product, (p) => p.id, {
		onDelete: 'CASCADE',
		cascade: true,
	})
	@JoinColumn({ name: 'product_id' })
	product: Product;

	@PrimaryColumn()
	user_id: number;
	@ManyToOne(() => User, (user) => user.like_products, {
		onDelete: 'CASCADE',
		cascade: true,
	})
	@JoinColumn({ name: 'user_id' })
	user: User;

	constructor(item: Partial<UserLikeProduct>) {
		Object.assign(this, item);
	}
}
