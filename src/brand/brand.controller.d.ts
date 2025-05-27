import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand-dto';
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    create(body: CreateBrandDto): Promise<CreateBrandDto & import("./entities/brand.entity").Brand>;
    update(id: number, body: CreateBrandDto): Promise<void>;
    delete(id: number): Promise<void>;
}
