import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly entityManager: EntityManager) {}

  async findOne(username: string) {
    return await this.entityManager
      .createQueryBuilder(User, 'user')
      .where('user.username = :username', { username })
      .getOne();
  }

  async addOne(user: CreateUserDto) {
    const newUser = new User(user);
    await this.entityManager.save(newUser);

    return 'ok';
  }

  async updateFreshToken(newToken: string, username: string) {
    return await this.entityManager
      .createQueryBuilder(User, 'user')
      .update()
      .set({
        refresh_token: newToken,
      })
      .where('username = :username', { username: username })
      .execute();
  }
}
