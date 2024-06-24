import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DescriptionService } from './description.service';
import { UpdateDescriptionDto } from './dto/update.description.dto';
import { AuthGuard } from '@/auth/guards/auth.guard';

@Controller('product-descriptions')
export class DescriptionController {
  constructor(private readonly descriptionService: DescriptionService) {}

  @Put(':productId')
  @UseGuards(AuthGuard)
  @UsePipes(ValidationPipe)
  update(
    @Param('productId', ParseIntPipe) productId: number,
    @Body() dto: UpdateDescriptionDto,
  ) {
    return this.descriptionService.update(productId, dto);
  }
}
