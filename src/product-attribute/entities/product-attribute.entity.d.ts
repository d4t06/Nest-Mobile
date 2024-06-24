import { Product } from '@/products/entities/product.entity';
export declare class ProductAttribute {
    id: number;
    product_id: number;
    product: Product;
    category_attribute_id: number;
    category_attribute: string;
    value: string;
    constructor(item: Partial<ProductAttribute>);
}
