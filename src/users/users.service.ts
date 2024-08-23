import { ConflictException, Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    private readonly entityManager: EntityManager,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findOne(username: string) {
    return await this.entityManager
      .createQueryBuilder(User, 'user')
      .where('user.username = :username', { username })
      .getOne();
  }

  async addOne(user: CreateUserDto) {
    const foundedUser = await this.userRepository.findOne({
      where: {
        username: user.username,
      },
    });

    console.log(foundedUser);
  

    if (foundedUser) throw new ConflictException('Username had taken');

    await this.userRepository.save(user);

    // const newUser = new User(user);
    // await this.entityManager.save(newUser);

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
