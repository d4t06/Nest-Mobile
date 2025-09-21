import { UpdateProductDto } from './dto/update.product.dto';
import { CreateProductDto } from './dto/create.product.dto';
import { EntityManager, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Description } from '@/description/entities/description.entity';
import { ProductTag } from '@/product-tag/entities/product-tag.entity';
import { CreateProductTagDto } from '@/product-tag/dto/create-product-tag.dto';
import { CreateUserLikeProductDto } from '@/user-like-product/dto/create-user-like-product.dto';
import { UserLikeProduct } from '@/user-like-product/entities/user-like-product.entity';
export declare class ProductsService {
    private readonly productRepository;
    private readonly descriptionRepository;
    private readonly productTagRepository;
    private readonly userLikeProductRepository;
    private readonly entityManager;
    constructor(productRepository: Repository<Product>, descriptionRepository: Repository<Description>, productTagRepository: Repository<ProductTag>, userLikeProductRepository: Repository<UserLikeProduct>, entityManager: EntityManager);
    pageSize: number;
    findAll(page: string, category_id: string, brand_id: string): Promise<{
        count: number;
        page: number;
        category_id: number;
        brand_id: number;
        page_size: number;
        products: Product[];
    }>;
    findAllOfTag(page: string, tag_id: string): Promise<{
        count: number;
        page: number;
        page_size: number;
        products: Product[];
    }>;
    findOne(productId: number): Promise<Product>;
    search(q: string): Promise<Product[]>;
    create(createProductDto: CreateProductDto): Promise<Product>;
    update(updateDto: UpdateProductDto, id: number): Promise<string>;
    addTag(data: CreateProductTagDto[]): Promise<(CreateProductTagDto & ProductTag)[]>;
    removeTag(data: CreateProductTagDto): Promise<string>;
    likeProduct(data: CreateUserLikeProductDto): Promise<string>;
    unlikeProduct(data: CreateUserLikeProductDto): Promise<string>;
    delete(id: number): Promise<string>;
    getLikeProduct(user_id: number): Promise<UserLikeProduct[]>;
}
