import { Product } from '@/products/entities/product.entity';
export declare class Description {
    product_id: number;
    product: Product;
    content: string;
    constructor(data: Partial<Description>);
}
