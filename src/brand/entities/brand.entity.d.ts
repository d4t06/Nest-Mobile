import { Category } from '@/categories/entities/category.entity';
export declare class Brand {
    id: number;
    brand_name: string;
    brand_name_ascii: string;
    image_url: string;
    category_id: number;
    category: Category;
    constructor(item: Partial<Brand>);
}
