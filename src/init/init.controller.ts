import { CreateUserDto } from '@/users/dto/create-user.dto';
import { UsersService } from '@/users/users.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('init')
export class InitController {
  constructor(private readonly userService: UsersService) {}

  @Post('')
  init(@Body() createDto: { password: string }) {
    const user: CreateUserDto = {
      password: createDto.password,
      username: 'admin',
      role: 'ADMIN',
      refresh_token: '',
    };

    this.userService.addOne(user);
  }
}
