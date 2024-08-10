import { Test, TestingModule } from '@nestjs/testing';
import { GenealogyService } from './genealogy.service';
import { makeFullName, Person } from './lib';
import { faker } from '@faker-js/faker';

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
    const sex = faker.person.sexType();
    const person: Omit<Person, 'id' | 'fullName'> = {
      firstName: faker.person.firstName(sex),
      lastName: faker.person.lastName(sex),
      gender: sex,
      birthDate: new Date('1960-01-01').toISOString(),
    };

    const newPerson = genealogyService.createPerson(person);
    const result = genealogyService.getPersonById(newPerson.id);
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
