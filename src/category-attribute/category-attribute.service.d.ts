import { CategoryAttribute } from './entities/category-attribute.entity';
import { Repository } from 'typeorm';
import { UpdateCategoryAttributeDto } from './dto/update.category-attribute.dto';
import { CreateCategoryAttributeDto } from './dto/create.category-attribute.dto';
export declare class CategoryAttributeService {
    private readonly categoryAttributeRepository;
    constructor(categoryAttributeRepository: Repository<CategoryAttribute>);
    create(categoryAttributeDto: CreateCategoryAttributeDto): Promise<CategoryAttribute>;
    update(updateAttributeDto: UpdateCategoryAttributeDto, id: number): Promise<void>;
    delete(id: number): Promise<void>;
}
