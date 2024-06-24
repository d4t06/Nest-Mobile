import { ProductAttributeService } from './product-attribute.service';
import { CreateProductAttributeDto } from './dto/create.product-attribute.dto';
import { UpdateProductAttributeDto } from './dto/update-product-attribute.dto';
export declare class ProductAttributeController {
    private readonly productAttributeService;
    constructor(productAttributeService: ProductAttributeService);
    createAttribute(dto: CreateProductAttributeDto[]): Promise<(CreateProductAttributeDto & import("./entities/product-attribute.entity").ProductAttribute)[]>;
    updateAttribute(id: number, dto: UpdateProductAttributeDto): Promise<void>;
}
