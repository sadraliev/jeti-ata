import { IndividualIdentifier } from './individual.types';

export type Family = {
  id: IndividualIdentifier;
  husbandId: string;
  wifeId: string;
  marriageDate: string;
  divorceDate: string;
  children: IndividualIdentifier[];
};
