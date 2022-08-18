import { Test, TestingModule } from '@nestjs/testing';
import { SwordController } from './sword.controller';

describe('SwordController', () => {
  let controller: SwordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SwordController],
    }).compile();

    controller = module.get<SwordController>(SwordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
