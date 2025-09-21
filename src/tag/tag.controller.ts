import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Post,
	Put,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { TagService } from './tag.service';
import { Roles } from '@/auth/decorators/roles.decorator';
import { Role } from '@/auth/decorators/role.enum';
import { AuthGuard } from '@/auth/guards/auth.guard';
import { RolesGuard } from '@/auth/guards/roles.guard';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Controller('tags')
@Roles(Role.Admin)
@UseGuards(AuthGuard, RolesGuard)
export class TagController {
	constructor(private readonly tagService: TagService) {}

	@Post()
	@UsePipes(ValidationPipe)
	async create(@Body() tag: CreateTagDto) {
		const newProduct = await this.tagService.create(tag);
		return newProduct;
	}

	@Put(':id')
	@UsePipes(ValidationPipe)
	async update(
		@Body() updateDto: UpdateTagDto,
		@Param('id', ParseIntPipe) id: number,
	) {
		const newProduct = await this.tagService.update(id, updateDto);
		return newProduct;
	}

	@Delete(':id')
	async delete(@Param('id', ParseIntPipe) id: number) {
		await this.tagService.delete(id);
	}
}
