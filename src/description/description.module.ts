import { Module } from '@nestjs/common';
import { DescriptionController } from './description.controller';
import { DescriptionService } from './description.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Description } from './entities/description.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Description])],
  controllers: [DescriptionController],
  providers: [DescriptionService],
})
export class DescriptionModule {}
