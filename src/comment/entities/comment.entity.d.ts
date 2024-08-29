import { Product } from '@/products/entities/product.entity';
export declare class Comment {
    id: number;
    username: string;
    approved: boolean;
    date_diff: string;
    content: string;
    product_id: number;
    product: Product;
    created_at: Date;
    constructor(item: Partial<Comment>);
}
