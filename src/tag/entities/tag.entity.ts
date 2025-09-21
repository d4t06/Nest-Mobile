import { Category } from '@/categories/entities/category.entity';
import {
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Tags' })
export class Tag {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	category_id: number;
	@ManyToOne(() => Category, (category) => category.tags, {
		onDelete: 'CASCADE',
	})
	@JoinColumn({ name: 'category_id' })
	category: Category;

	@Column({ unique: true })
	name: string;
}
