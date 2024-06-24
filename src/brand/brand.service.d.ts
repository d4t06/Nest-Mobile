import { Repository } from 'typeorm';
import { Brand } from './entities/brand.entity';
import { CreateBrandDto } from './dto/create-brand-dto';
export declare class BrandService {
    private readonly brandRepository;
    constructor(brandRepository: Repository<Brand>);
    create(body: CreateBrandDto): Promise<void>;
    update(id: number, body: CreateBrandDto): Promise<void>;
    delete(id: number): Promise<void>;
}
