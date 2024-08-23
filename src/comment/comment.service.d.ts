import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create.comment.dto';
export declare class CommentService {
    private readonly commentRepository;
    constructor(commentRepository: Repository<Comment>);
    findAllComment(page: number, size: number): Promise<{
        comments: Comment[];
        count: number;
        page: number;
        size: number;
    }>;
    findAllProductComment(page: string, size: string, product_id: string, approved: string): Promise<{
        comments: Comment[];
        count: number;
        page: number;
        size: number;
        product_id: number;
        approved: number;
    }>;
    add(createDto: CreateCommentDto): Promise<CreateCommentDto & Comment>;
    approve(id_list: number[]): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
