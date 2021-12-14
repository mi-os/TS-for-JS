export {};

type Words = string;

const fooString: string = 'Hello';
const fooWords: Words = 'Hello';

const example1 = {
  name: 'Tom',
  age: 20
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'Tom',
  age: 20
};

// Follow the type
type Profile2 = typeof example1;
