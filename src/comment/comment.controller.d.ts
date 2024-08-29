import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create.comment.dto';
export declare class CommentController {
    private readonly CommentService;
    constructor(CommentService: CommentService);
    findAllProductComment(product_id: string, page: string, size: string, approved: string): Promise<{
        comments: import("./entities/comment.entity").Comment[];
        count: number;
        page: number;
        size: number;
        product_id: number;
        approved: number;
    }>;
    add(dto: CreateCommentDto): Promise<import("./entities/comment.entity").Comment>;
    approve(data: {
        id_list: number[];
    }): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
