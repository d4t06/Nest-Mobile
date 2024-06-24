import { DescriptionService } from './description.service';
import { UpdateDescriptionDto } from './dto/update.description.dto';
export declare class DescriptionController {
    private readonly descriptionService;
    constructor(descriptionService: DescriptionService);
    update(productId: number, dto: UpdateDescriptionDto): Promise<void>;
}
