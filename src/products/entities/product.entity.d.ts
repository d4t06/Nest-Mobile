import { Category } from 'src/categories/entities/category.entity';
import { Description } from '@/description/entities/description.entity';
import { ProductAttribute } from '@/product-attribute/entities/product-attribute.entity';
import { Brand } from '@/brand/entities/brand.entity';
export declare class Product {
    id: number;
    product_name: string;
    product_name_ascii: string;
    image_url: string;
    category_id: number;
    category: Category;
    brand_id: number;
    brand: Brand;
    attributes: ProductAttribute[];
    created_at: Date;
    description: Description;
    constructor(product: Partial<Product>);
}
