import { CreateCategoryDto } from './dto/create-category.dto';
import { EntityManager, Repository } from 'typeorm';
import { Category } from './entities/category.entity';
import { updateCategoryDto } from './dto/update-category.dto';
export declare class CategoriesService {
    private readonly categoryRepository;
    private readonly entityManager;
    constructor(categoryRepository: Repository<Category>, entityManager: EntityManager);
    findAll(): Promise<Category[]>;
    create(categoryDto: CreateCategoryDto): Promise<Category>;
    update(updateDto: updateCategoryDto, id: number): Promise<void>;
    delete(id: number): Promise<void>;
}
