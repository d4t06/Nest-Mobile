import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create.comment.dto';
import { AuthGuard } from '@/auth/guards/auth.guard';
import { UpdateCommentDto } from './dto/update.comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly CommentService: CommentService) {}

  @Get('')
  findAllProductComment(
    @Query('product_id') product_id: string,
    @Query('page') page: string,
    @Query('size') size: string,
    @Query('approved') approved: string,
  ) {
    return this.CommentService.findAllProductComment(
      page,
      size,
      product_id,
      approved,
    );
  }

  @Post('')
  @UsePipes(ValidationPipe)
  add(@Body() dto: CreateCommentDto) {
    return this.CommentService.add(dto);
  }

  //   @Get('all')
  //   @UseGuards(AuthGuard)
  //   findComment(
  //     @Query('page', ParseIntPipe) page: number,
  //     @Query('size', ParseIntPipe) size: number,
  //   ) {
  //     return this.CommentService.findAllComment(page, size);
  //   }

  @Put(':id')
  @UseGuards(AuthGuard)
  approve(@Param('id') id: number, @Body() dto: UpdateCommentDto) {
    return this.CommentService.approve(dto, id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  delete(@Param('id') id: number) {
    return this.CommentService.delete(id);
  }
}
