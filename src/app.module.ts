import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { SearchModule } from './search/search.module';
import { DatabaseModule } from './database/database.module';
import { ImagesModule } from './images/images.module';
import { ProductManagementModule } from './product-management/product-management.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local'],
      isGlobal: true,
    }),
    DatabaseModule,
    ProductsModule,
    CategoriesModule,
    SearchModule,
    ImagesModule,
    ProductManagementModule,
  ],
})
export class AppModule {}
