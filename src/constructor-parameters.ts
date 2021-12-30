export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let mike = new Person('Mike', 18);
console.log(mike);

type PersonType = typeof Person;
type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['Ren', 20];
const ren = new Person(...profile);
console.log(ren);

type MyConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;
