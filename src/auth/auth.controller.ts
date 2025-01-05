import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/sign-in.dto';
import { AuthGuard } from './guards/auth.guard';
import { RolesGuard } from './guards/roles.guard';
import { Roles } from './decorators/roles.decorator';
import { Role } from './decorators/role.enum';
import { CreateUserDto } from '@/users/dto/create-user.dto';
import { LoggingInterceptor } from './interceptors/login.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

// class
@Controller('auth')
// @Roles(Role.Admin, Role.User)
export class AuthController {
  // route handler
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  @UseInterceptors(LoggingInterceptor, ErrorInterceptor)
  signIn(
    @Body() signInDto: SignInDto,
    //  @Res({ passthrough: true }) response: Response,
  ) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @Post('/register')
  @UsePipes(ValidationPipe)
  register(@Body() createDto: CreateUserDto) {
    return this.authService.register(createDto);
  }

  // @Get('/refresh')
  // refresh(@Req() request: Request) {
  //   return this.authService.refreshToken(request);
  // }

  @Get('/users')
  // @Throttle({ default: { limit: 2, ttl: 60000 } })
  @Roles(Role.User)
  @UseGuards(AuthGuard, RolesGuard)
  findAll() {
    return 'this route find all user';
  }
}
