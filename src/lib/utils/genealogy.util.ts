import { faker } from '@faker-js/faker';
import { BaseIndividual, Gender, IndividualIdentifier } from '../types';

export const makeFullName = ({
  firstName,
  lastName,
}: {
  firstName: string;
  lastName: string;
}) => `${firstName} ${lastName}`;

export const makeIndividual = ({
  gender,
  fatherId,
  motherId,
}: {
  gender?: Gender;
  motherId?: IndividualIdentifier;
  fatherId?: IndividualIdentifier;
} = {}) => {
  const sex = gender ? gender : faker.person.sexType();
  const person: BaseIndividual = {
    firstName: faker.person.firstName(sex),
    lastName: faker.person.lastName(sex),
    gender: sex,
    birthDate: faker.date
      .birthdate({
        min: 1900,
        max: 2000,
      })
      .toISOString(),
  };
  if (fatherId) {
    person.fatherId = fatherId;
  }

  if (motherId) {
    person.motherId = motherId;
  }
  return person;
};
