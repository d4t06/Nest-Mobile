import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { AuthGuard } from './guards/auth.guard';
import { Request, Response } from 'express';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorators/roles.decorator';
import { Role } from './decorators/role.enum';
import { CreateUserDto } from '@/users/dto/create-user.dto';

// class
@Controller('auth')
// @Roles(Role.Admin, Role.User)
export class AuthController {
  // route handler
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  signIn(
    @Body() signInDto: SignInDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.authService.signIn(
      signInDto.username,
      signInDto.password,
      response,
    );
  }

  @Post('/register')
  register(@Body() createDto: CreateUserDto) {
    return this.authService.register(createDto);
  }

  @Get('/refresh')
  refresh(@Req() request: Request) {
    return this.authService.refreshToken(request);
  }

  @Get('/users')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  findAll() {
    return 'this route use Auth Guard';
  }
}
