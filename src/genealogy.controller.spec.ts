import { Test, TestingModule } from '@nestjs/testing';
import { GenealogyController } from './genealogy.controller';
import { GenealogyService } from './genealogy.service';

describe('AppController', () => {
  let genealogyController: GenealogyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GenealogyController],
      providers: [GenealogyService],
    }).compile();

    genealogyController = module.get<GenealogyController>(GenealogyController);
  });

  it('should be defined', () => {
    expect(genealogyController).toBeDefined();
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(genealogyController.getHello()).toBe('Hello World!');
    });
  });
});
