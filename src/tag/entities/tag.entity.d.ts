import { Category } from '@/categories/entities/category.entity';
export declare class Tag {
    id: number;
    category_id: number;
    category: Category;
    name: string;
}
