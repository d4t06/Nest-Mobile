import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { CreateUserDto } from '@/users/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto): Promise<{
        token: string;
        user: {
            name: string;
            role: string;
        };
    }>;
    register(createDto: CreateUserDto): Promise<string>;
    findAll(): string;
}
