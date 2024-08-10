import { Test, TestingModule } from '@nestjs/testing';
import { GenealogyService } from './genealogy.service';
import { Person } from './lib';

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

  it('it should add a person', () => {
    const person: Omit<Person, 'id'> = {
      fullName: 'John Doe',
      birthDate: new Date('1960-01-01').toISOString(),
    };

    const newPerson = genealogyService.createPerson(person);
    const result = genealogyService.getPersonById(newPerson.id);
    expect(result).toEqual({ id: newPerson.id, ...person });
  });
});
