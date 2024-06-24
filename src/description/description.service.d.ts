import { Description } from './entities/description.entity';
import { Repository } from 'typeorm';
import { UpdateDescriptionDto } from './dto/update.description.dto';
export declare class DescriptionService {
    private readonly descriptionRepository;
    constructor(descriptionRepository: Repository<Description>);
    update(productId: number, dto: UpdateDescriptionDto): Promise<void>;
}
