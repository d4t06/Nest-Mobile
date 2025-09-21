import { Module } from '@nestjs/common';
import { UserLikeProductService } from './user-like-product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserLikeProduct } from './entities/user-like-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserLikeProduct])],
  providers: [UserLikeProductService]
})
export class UserLikeProductModule {}
