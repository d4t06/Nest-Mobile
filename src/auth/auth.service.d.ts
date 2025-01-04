import { CreateUserDto } from '@/users/dto/create-user.dto';
import { UsersService } from '@/users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    signIn(username: string, pass: string): Promise<{
        token: string;
        user: {
            name: string;
            role: string;
        };
    }>;
    register(createUserDto: CreateUserDto): Promise<string>;
}
