import { Category } from '@/categories/entities/category.entity';
export declare class CategoryAttribute {
    id: number;
    category_id: number;
    category: Category;
    attribute_name_ascii: string;
    attribute_name: string;
    represent: boolean;
    constructor(item: Partial<CategoryAttribute>);
}
