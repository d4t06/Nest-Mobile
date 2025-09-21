import { UserLikeProduct } from '@/user-like-product/entities/user-like-product.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    refresh_token: string;
    role: string;
    like_products: UserLikeProduct[];
    constructor(user: Partial<User>);
}
