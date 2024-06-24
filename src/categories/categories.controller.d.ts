import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { updateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
export declare class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    findAll(): Promise<Category[]>;
    create(createDto: CreateCategoryDto): Promise<Category>;
    update(updateDto: updateCategoryDto, id: number): Promise<void>;
    delete(id: number): Promise<void>;
}
