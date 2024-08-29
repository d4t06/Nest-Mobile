import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, In, Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
import { CreateCommentDto } from './dto/create.comment.dto';
import { date_diff } from '@/utils/apphelper';

const PAGE_SIZE = +process.env.PAGE_SIZE || 12;

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
    const _productId = typeof product_id === 'string' && +product_id;
    const _size =
      (typeof size === 'string' && +size < PAGE_SIZE && +size) || PAGE_SIZE;
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

    if (comments.length) {
      for (let index = 0; index < comments.length; index++) {
        const dateDiff = date_diff(comments[index].created_at);
        comments[index].date_diff = dateDiff;
      }
    }

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
    const comment = new Comment({
      ...createDto,
      approved: false,
      date_diff: '',
    });

    const newComment = await this.commentRepository.save(comment);

    return newComment;
  }

  async approve(id_list: number[]) {
    return await this.commentRepository.update(
      { id: In(id_list) },
      { approved: true },
    );
  }

  async delete(id: number) {
    const comment = await this.commentRepository.findOne({
      where: { id },
    });

    if (!comment) throw new NotFoundException('Comment not found');

    return await this.commentRepository.delete({ id });
  }
}
