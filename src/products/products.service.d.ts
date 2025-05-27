import { UpdateProductDto } from './dto/update.product.dto';
import { CreateProductDto } from './dto/create.product.dto';
import { EntityManager, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { Description } from '@/description/entities/description.entity';
export declare class ProductsService {
    private readonly productRepository;
    private readonly descriptionRepository;
    private readonly entityManager;
    constructor(productRepository: Repository<Product>, descriptionRepository: Repository<Description>, entityManager: EntityManager);
    pageSize: number;
    findAll(page: number, category_id: string, brand_id: string): Promise<{
        count: number;
        page: number;
        category_id: number;
        brand_id: number;
        page_size: number;
        products: Product[];
    }>;
    findOne(productId: number): Promise<Product>;
    search(q: string): Promise<Product[]>;
    create(createProductDto: CreateProductDto): Promise<Product>;
    update(updateDto: UpdateProductDto, id: number): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
