import { Injectable } from '@nestjs/common';
import { Person } from './lib';

@Injectable()
export class GenealogyService {
  private persons = new Map<string, Person>();
  createPerson(person: Omit<Person, 'id'>) {
    const identifier = new Date().getTime().toString();
    this.persons.set(identifier, { id: identifier, ...person });
    return this.getPersonById(identifier);
  }
  getPersonById(identifier: string) {
    return this.persons.get(identifier);
  }
}
