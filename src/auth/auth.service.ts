import { CreateUserDto } from '@/users/dto/create-user.dto';
import { UsersService } from '@/users/users.service';
import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

const TOKEN_EXPIRES = '1h';
const REFRESH_TOKEN_EXPIRES = '30d';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string, res: Response) {
    const foundedUser = await this.userService.findOne(username);

    if (!foundedUser || foundedUser.password !== pass) {
      throw new UnauthorizedException();
    }

    const authToken = await this.jwtService.signAsync(
      {
        username: username,
        role: foundedUser.role,
        id: foundedUser.id,
      },
      { expiresIn: TOKEN_EXPIRES, secret: process.env.JWT_SECRET },
    );

    const refreshToken = await this.jwtService.signAsync(
      {
        username: username,
        role: foundedUser.role,
        id: foundedUser.id,
      },
      { expiresIn: REFRESH_TOKEN_EXPIRES, secret: process.env.JWT_SECRET },
    );

    res.cookie('refresh_token', refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 29,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      domain: 'nest-mobile.vercel.app',
      sameSite: 'none',
      path: '/',
    });

    return {
      token: authToken,
      refresh_token: refreshToken,
      user: {
        username: username,
        role: foundedUser.role,
        like_products: foundedUser.like_products,
        id: foundedUser.id,
      },
    };
  }

  async register(createUserDto: CreateUserDto) {
    return await this.userService.addOne(createUserDto);
  }

  async refresh(refreshToken: string) {
    const payload = await this.jwtService.verifyAsync(refreshToken, {
      secret: process.env.JWT_SECRET,
    });
    const { username, role, id } = payload;

    const foundedUser = await this.userService.findOne(username);
    if (!foundedUser) throw new UnauthorizedException();

    const newToken = await this.jwtService.signAsync(
      { username, role, id },
      {
        secret: process.env.JWT_SECRET,
        expiresIn: TOKEN_EXPIRES,
      },
    );

    return { token: newToken, user: { username, role } };
  }

  async refreshToken(request: Request) {
    const refreshToken = request.body['refresh_token'];

    if (!refreshToken) throw new UnauthorizedException();

    try {
      const payload = await this.refresh(refreshToken);

      return payload;
    } catch (error) {
      throw new ForbiddenException();
    }
  }

  async refreshTokenWithCookie(req: Request) {
    const refreshToken = req.cookies?.refresh_token;

    if (!refreshToken) throw new UnauthorizedException();

    try {
      const payload = await this.refresh(refreshToken);

      return payload;
    } catch (error) {
      throw new ForbiddenException();
    }
  }

  async logout(res: Response) {
    res.clearCookie('refresh_token');
    return res.sendStatus(200);
  }
}
