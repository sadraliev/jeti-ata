import { Injectable } from '@nestjs/common';
import { BaseIndividual, Individual, makeFullName } from './lib';

@Injectable()
export class GenealogyService {
  private individuals = new Map<string, Individual>();

  createIndividual(individual: BaseIndividual) {
    const identifier = new Date().getTime().toString();
    this.individuals.set(identifier, {
      id: identifier,
      fullName: makeFullName({
        firstName: individual.firstName,
        lastName: individual.lastName,
      }),
      ...individual,
    });
    return this.getIndividualById(identifier);
  }
  getIndividualById(identifier: string) {
    return this.individuals.get(identifier);
  }
}
