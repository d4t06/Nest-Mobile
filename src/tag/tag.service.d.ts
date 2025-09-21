import { Tag } from './entities/tag.entity';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
export declare class TagService {
    private readonly tagRepository;
    constructor(tagRepository: Repository<Tag>);
    findAll(): Promise<Tag[]>;
    create(tagDto: CreateTagDto): Promise<CreateTagDto & Tag>;
    update(id: number, tagDto: UpdateTagDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<void>;
}
