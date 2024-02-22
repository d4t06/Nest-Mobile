import { Test, TestingModule } from '@nestjs/testing';
import { ProductManagementController } from './product-management.controller';
import { ProductManagementService } from './product-management.service';

describe('ProductManagementController', () => {
  let controller: ProductManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductManagementController],
      providers: [ProductManagementService],
    }).compile();

    controller = module.get<ProductManagementController>(ProductManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
