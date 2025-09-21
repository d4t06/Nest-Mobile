import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entity';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagService {
	constructor(
		@InjectRepository(Tag)
		private readonly tagRepository: Repository<Tag>,
	) {}

	async findAll() {
		return await this.tagRepository.find();
	}

	async create(tagDto: CreateTagDto) {
		const newTag = await this.tagRepository.save(tagDto);
		return newTag;
	}

	async update(id: number, tagDto: UpdateTagDto) {
		return await this.tagRepository.update(id, tagDto);
	}

	async delete(id: number) {
		await this.tagRepository.delete({ id });
	}
}
