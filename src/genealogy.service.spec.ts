import { Test, TestingModule } from '@nestjs/testing';
import { GenealogyService } from './genealogy.service';
import { makeFullName, makeIndividual } from './lib';

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
    const person = makeIndividual();
    const newPerson = genealogyService.createIndividual(person);
    const result = genealogyService.getIndividualById(newPerson.id);
    expect(result).toEqual({
      id: newPerson.id,
      fullName: makeFullName({
        firstName: person.firstName,
        lastName: person.lastName,
      }),
      ...person,
    });
  });
});
