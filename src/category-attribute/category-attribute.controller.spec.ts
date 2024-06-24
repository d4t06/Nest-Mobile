import { Test, TestingModule } from '@nestjs/testing';
import { CategoryAttributeController } from './category-attribute.controller';

describe('CategoryAttributeController', () => {
  let controller: CategoryAttributeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryAttributeController],
    }).compile();

    controller = module.get<CategoryAttributeController>(CategoryAttributeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
