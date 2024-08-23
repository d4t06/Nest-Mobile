import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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
import { RolesGuard } from '@/auth/guards/roles.guard';
import { Roles } from '@/auth/decorators/roles.decorator';
import { Role } from '@/auth/decorators/role.enum';

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
  // @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  @UsePipes(ValidationPipe)
  add(@Body() dto: CreateCommentDto) {
    return this.CommentService.add(dto);
  }

  @Put('')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  approve(@Body() data: { id_list: number[] }) {
    return this.CommentService.approve(data.id_list);
  }

  @Delete(':id')
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  delete(@Param('id') id: number) {
    return this.CommentService.delete(id);
  }
}
