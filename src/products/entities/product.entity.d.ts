import { Category } from '@/categories/entities/category.entity';
import { Description } from '@/description/entities/description.entity';
import { ProductAttribute } from '@/product-attribute/entities/product-attribute.entity';
import { Brand } from '@/brand/entities/brand.entity';
import { Comment } from '@/comment/entities/comment.entity';
import { ProductTag } from '@/product-tag/entities/product-tag.entity';
import { ProductFeature } from '@/product-feature/entities/product-feature.entity';
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
    comments: Comment[];
    product_tags: ProductTag[];
    features: ProductFeature[];
    created_at: Date;
    description: Description;
    constructor(product: Partial<Product>);
}
