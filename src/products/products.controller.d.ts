import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create.product.dto';
import { UpdateProductDto } from './dto/update.product.dto';
import { Product } from './entities/product.entity';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    findAll(page: number, category_id: string): Promise<{
        count: number;
        page: number;
        category_id: string;
        page_size: number;
        products: Product[];
    }>;
    search(q: string): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    create(product: CreateProductDto): Promise<Product>;
    update(updateDto: UpdateProductDto, id: number): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<void>;
}
