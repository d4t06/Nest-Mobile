import { CreateUserDto } from '@/users/dto/create-user.dto';
import { UsersService } from '@/users/users.service';
import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string, response: Response) {
    const foundedUser = await this.userService.findOne(username);

    if (!foundedUser || foundedUser.password !== pass) {
      throw new UnauthorizedException();
    }

    const newToken = await this.jwtService.signAsync(
      {
        username: username,
        role: foundedUser.role,
      },
      { expiresIn: '1h' },
    );

    const refresh_token = await this.jwtService.signAsync(
      {
        username: username,
        role: foundedUser.role,
      },
      { expiresIn: '1d' },
    );

    await this.userService.updateFreshToken(refresh_token, username);

    response.cookie('jwt', refresh_token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return {
      token: newToken,
      user: {
        name: username,
      },
    };
  }

  async register(createUserDto: CreateUserDto) {
    return await this.userService.addOne(createUserDto);
  }

  async refreshToken(request: Request) {
    const cookies = request.cookies;
    const refreshToken = cookies.jwt;

    if (!refreshToken) throw new UnauthorizedException();

    try {
      const payload = await this.jwtService.verifyAsync(refreshToken, {
        secret: process.env.JWT_SECRET,
      });
      const { username, role } = payload;

      const foundedUser = await this.userService.findOne(username);
      if (!foundedUser) throw new UnauthorizedException();

      const newToken = await this.jwtService.signAsync(
        { username, role },
        {
          secret: process.env.JWT_SECRET,
        },
      );

      return { token: newToken };
    } catch (error) {
      throw new ForbiddenException();
    }
  }
}
