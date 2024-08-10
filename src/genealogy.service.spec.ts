import { Test, TestingModule } from '@nestjs/testing';
import { GenealogyService } from './genealogy.service';

describe('GenealogyService', () => {
  let genealogyService: GenealogyService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GenealogyService],
    }).compile();

    genealogyService = module.get<GenealogyService>(GenealogyService);
  });

  it('should be defined', () => {
    expect(genealogyService).toBeDefined();
  });
});
