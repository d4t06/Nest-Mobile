import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { Request, Response } from 'express';
import { CreateUserDto } from '@/users/dto/create-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto, response: Response): Promise<{
        token: string;
        user: {
            name: string;
            role: string;
        };
    }>;
    register(createDto: CreateUserDto): Promise<string>;
    refresh(request: Request): Promise<{
        token: string;
    }>;
    findAll(): string;
}
