import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ImagesService } from './images.service';
// import { CreateImageDto } from './dto/create-image.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { AuthGuard } from '@/auth/guards/auth.guard';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UseInterceptors(
    FileInterceptor('image', {
      storage: memoryStorage(),
    }),
  )
  create(
    @UploadedFile('file') file: Express.Multer.File,
    @Query('width') width?: number,
    @Query('height') height?: number,
  ) {
    return this.imagesService.create(file, width, height);
  }

  @Get()
  findAll(@Query('page', ParseIntPipe) page: number) {
    return this.imagesService.findAll(page);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.imagesService.remove(id);
  }
}
