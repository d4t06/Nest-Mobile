import { Controller, Get } from '@nestjs/common';

@Controller('search')
export class SearchController {


   @Get()
   searchProduct():string {
      return 'search product'
   }
}
