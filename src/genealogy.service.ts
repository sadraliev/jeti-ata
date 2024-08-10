import { Injectable } from '@nestjs/common';
import { makeFullName, Person } from './lib';

@Injectable()
export class GenealogyService {
  private persons = new Map<string, Person>();
  createPerson(person: Omit<Person, 'id' | 'fullName'>) {
    const identifier = new Date().getTime().toString();
    this.persons.set(identifier, {
      id: identifier,
      fullName: makeFullName({
        firstName: person.firstName,
        lastName: person.lastName,
      }),
      ...person,
    });
    return this.getPersonById(identifier);
  }
  getPersonById(identifier: string) {
    return this.persons.get(identifier);
  }
}
