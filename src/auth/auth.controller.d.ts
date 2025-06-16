/// <reference types="cookie-parser" />
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { CreateUserDto } from '@/users/dto/create-user.dto';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(signInDto: SignInDto, response: Response): Promise<{
        token: string;
        refresh_token: string;
        user: {
            username: string;
            role: string;
        };
    }>;
    register(createDto: CreateUserDto): Promise<string>;
    refresh(request: Request): Promise<{
        token: string;
        user: {
            username: any;
            role: any;
        };
    }>;
    refreshWithCookie(request: Request): Promise<Record<string, any>>;
    findAll(request: Request): any;
    logout(response: Response): Promise<Response<any, Record<string, any>>>;
}
