export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person('man', 100);
console.log(me);
