import { Product } from '@/products/entities/product.entity';
import { Tag } from '@/tag/entities/tag.entity';
export declare class ProductTag {
    product_id: number;
    product: Product;
    tag_id: number;
    tag: Tag;
}
