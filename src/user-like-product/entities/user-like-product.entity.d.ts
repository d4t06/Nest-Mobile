import { Product } from '@/products/entities/product.entity';
import { User } from '@/users/entities/user.entity';
export declare class UserLikeProduct {
    product_id: number;
    product: Product;
    user_id: number;
    user: User;
    constructor(item: Partial<UserLikeProduct>);
}
