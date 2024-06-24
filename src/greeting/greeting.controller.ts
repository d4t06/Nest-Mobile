import { Controller, Get } from '@nestjs/common';

@Controller('greeting')
export class GreetingController {
  @Get()
  greeting() {
    return 'Hello';
  }
}
