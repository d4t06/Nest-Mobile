import { Test, TestingModule } from '@nestjs/testing';
import { UserLikeProductService } from './user-like-product.service';

describe('UserLikeProductService', () => {
  let service: UserLikeProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserLikeProductService],
    }).compile();

    service = module.get<UserLikeProductService>(UserLikeProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
