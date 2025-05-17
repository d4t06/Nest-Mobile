import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { CreateUserDto } from '@/users/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto): Promise<{
        token: string;
        refresh_token: string;
        user: {
            name: string;
            role: string;
        };
    }>;
    register(createDto: CreateUserDto): Promise<string>;
    refresh(request: Request): Promise<{
        token: string;
    }>;
    findAll(request: Request): any;
}
