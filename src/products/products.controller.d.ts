import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { Product } from './entities/product.entity';
import { CreateProductTagDto } from '@/product-tag/dto/create-product-tag.dto';
import { CreateUserLikeProductDto } from '@/user-like-product/dto/create-user-like-product.dto';
import { CreateProductFeatureDto } from '@/product-feature/dto/create-product-feature.dto';
import { UpdateProductFeature } from '@/product-feature/dto/update-product-feature.dto';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    test(): Promise<void>;
    findAll(page: number, category_id: number, brand_id: string[], tag_id: string[]): Promise<{
        count: number;
        page: number;
        category_id: number;
        brand_id: string[];
        tag_id: string[];
        page_size: number;
        products: Product[];
    }>;
    findAllOfTag(page: number, tag_id: number): Promise<{
        count: number;
        page: number;
        page_size: number;
        products: Product[];
    }>;
    search(q: string): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    create(product: CreateProductDto): Promise<Product>;
    addTag(productTags: CreateProductTagDto[]): Promise<(CreateProductTagDto & import("../product-tag/entities/product-tag.entity").ProductTag)[]>;
    removeTag(product_id: number, tag_id: number): Promise<string>;
    update(updateDto: UpdateProductDto, id: number): Promise<string>;
    delete(id: number): Promise<void>;
    getLikeProduct(request: Request & {
        user: {
            id: number;
        };
    }, user_id: number): Promise<import("../user-like-product/entities/user-like-product.entity").UserLikeProduct[]>;
    likeProduct(request: Request & {
        user: {
            id: number;
        };
    }, data: CreateUserLikeProductDto): Promise<void>;
    unLikeProduct(request: Request & {
        user: {
            id: number;
        };
    }, product_id: number, user_id: number): Promise<string>;
    addProductFeature(data: CreateProductFeatureDto): Promise<void>;
    editProductFeature(data: UpdateProductFeature, id: number): Promise<void>;
    deleteProductFeature(id: number): Promise<void>;
}
