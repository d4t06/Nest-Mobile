import { CategoryAttributeService } from './category-attribute.service';
import { CreateCategoryAttributeDto } from './dto/create.category-attribute.dto';
import { UpdateCategoryAttributeDto } from './dto/update.category-attribute.dto';
export declare class CategoryAttributeController {
    private readonly categoryAttributeService;
    constructor(categoryAttributeService: CategoryAttributeService);
    create(createDto: CreateCategoryAttributeDto): Promise<import("./entities/category-attribute.entity").CategoryAttribute>;
    updateAttribute(id: number, updateDto: UpdateCategoryAttributeDto): Promise<void>;
    deleteAttribute(id: number): Promise<void>;
}
