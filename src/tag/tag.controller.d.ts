import { TagService } from './tag.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    create(tag: CreateTagDto): Promise<CreateTagDto & import("./entities/tag.entity").Tag>;
    update(updateDto: UpdateTagDto, id: number): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<void>;
}
