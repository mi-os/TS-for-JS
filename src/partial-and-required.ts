export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

type ParsialType = Partial<Profile>;
type RequiredType = Required<Profile>;
