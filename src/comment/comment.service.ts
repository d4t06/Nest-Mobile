import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create.comment.dto';
import { UpdateCommentDto } from './dto/update.comment.dto';

const PAGE_SIZE = +process.env.PAGE_SIZE || 6;

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async findAllComment(page: number, size: number) {
    const _size = size < 12 ? size : PAGE_SIZE;

    const [comments, count] = await this.commentRepository.findAndCount({
      take: _size,
      skip: (page - 1) * _size,
      order: {
        id: 'DESC',
      },
    });

    return {
      comments,
      count,
      page,
      size: _size,
    };
  }

  async findAllProductComment(
    page: string,
    size: string,
    product_id: string,
    approved: string,
  ) {
    const _productId =
      product_id && typeof product_id === 'string' && +product_id;
    const _size =
      (size && typeof size === 'string' && +size < 12 && +size) || 1;
    const _page = (page && typeof page === 'string' && +page) || 1;

    const where: FindOneOptions<Comment>['where'] = {};

    const _approved =
      typeof +approved === 'number' && [0, 1].includes(+approved)
        ? +approved
        : 1;
    where.approved = !!_approved;

    if (_productId) where.product_id = _productId;

    const [comments, count] = await this.commentRepository.findAndCount({
      take: _size,
      skip: (_page - 1) * _size,
      order: {
        id: 'DESC',
      },
      where,
    });

    return {
      comments,
      count,
      page: _page,
      size: _size,
      product_id: _productId,
      approved: _approved,
    };
  }

  async add(createDto: CreateCommentDto) {
    const newComment = await this.commentRepository.save(createDto);

    return newComment;
  }

  async approve(updateDto: UpdateCommentDto, id: number) {
    return await this.commentRepository.update(id, updateDto);
  }

  async delete(id: number) {
    const comment = await this.commentRepository.findOne({
      where: { id },
    });

    if (!comment) throw new NotFoundException('Comment not found');

    return await this.commentRepository.delete({ id });
  }
}
