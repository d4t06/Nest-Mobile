import { UserLikeProduct } from '@/user-like-product/entities/user-like-product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({
    default: '',
  })
  refresh_token: string;

  @Column({
    default: 'USER',
  })
  role: string;

  @OneToMany(() => UserLikeProduct, (model) => model.user, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  like_products: UserLikeProduct[];

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}
