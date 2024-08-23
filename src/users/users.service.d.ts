import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private readonly entityManager;
    private readonly userRepository;
    constructor(entityManager: EntityManager, userRepository: Repository<User>);
    findOne(username: string): Promise<User>;
    addOne(user: CreateUserDto): Promise<string>;
    updateFreshToken(newToken: string, username: string): Promise<import("typeorm").UpdateResult>;
}
