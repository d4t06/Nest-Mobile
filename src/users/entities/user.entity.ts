import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}
