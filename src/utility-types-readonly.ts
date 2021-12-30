export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Tom',
  age: 20,
};

me.age++;
console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Ren',
  age: 20,
};

// friend.age++

type ReadonlyTest<T> = { readonly [P in keyof T]: T[P] };
type ReadonlyTestProfile = ReadonlyTest<Profile>;
