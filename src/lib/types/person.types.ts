const gender = ['male', 'female'] as const;
type Gender = (typeof gender)[number];

export type Person = {
  id: string;
  firstName: string;
  lastName: string;
  fullName: string;
  birthDate: string;
  deathDate?: string;
  gender: Gender;
};
