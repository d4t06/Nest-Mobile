import { Brand } from '@/brand/entities/brand.entity';
import { CategoryAttribute } from '@/category-attribute/entities/category-attribute.entity';
export declare class Category {
    id: number;
    category_name: string;
    category_name_ascii: string;
    attributes: CategoryAttribute[];
    brands: Brand[];
    attribute_order: string;
    constructor(item: Partial<Category>);
}
