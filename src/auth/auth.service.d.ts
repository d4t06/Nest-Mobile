/// <reference types="cookie-parser" />
import { CreateUserDto } from '@/users/dto/create-user.dto';
import { UsersService } from '@/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    signIn(username: string, pass: string, res: Response): Promise<{
        token: string;
        refresh_token: string;
        user: {
            username: string;
            role: string;
        };
    }>;
    register(createUserDto: CreateUserDto): Promise<string>;
    refresh(refreshToken: string): Promise<{
        token: string;
        user: {
            username: any;
            role: any;
        };
    }>;
    refreshToken(request: Request): Promise<{
        token: string;
        user: {
            username: any;
            role: any;
        };
    }>;
    refreshTokenWithCookie(req: Request): Promise<{
        token: string;
        user: {
            username: any;
            role: any;
        };
    }>;
    logout(res: Response): Promise<Response<any, Record<string, any>>>;
}
