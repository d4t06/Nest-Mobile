import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
   getAllCategories() {
      return 'get all category'
   }
}
