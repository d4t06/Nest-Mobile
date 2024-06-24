import { Repository } from 'typeorm';
import { ProductAttribute } from './entities/product-attribute.entity';
import { CreateProductAttributeDto } from './dto/create.product-attribute.dto';
import { UpdateProductAttributeDto } from './dto/update-product-attribute.dto';
export declare class ProductAttributeService {
    private readonly productAttributeRepository;
    constructor(productAttributeRepository: Repository<ProductAttribute>);
    createAttribute(createDto: CreateProductAttributeDto[]): Promise<(CreateProductAttributeDto & ProductAttribute)[]>;
    updateAttribute(updateDto: UpdateProductAttributeDto, id: number): Promise<void>;
}
