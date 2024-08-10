const gender = ['male', 'female'] as const;
export type Gender = (typeof gender)[number];

export type IndividualIdentifier = string;
export type Individual = {
  id: IndividualIdentifier;
  firstName: string;
  lastName: string;
  fullName: string;
  birthDate: string;
  deathDate?: string;
  gender: Gender;
  fatherId?: IndividualIdentifier;
  motherId?: IndividualIdentifier;
};

export type BaseIndividual = Omit<Individual, 'id' | 'fullName'>;
