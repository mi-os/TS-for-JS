export {};

type ObjectType = {
  name: string;
  age: number;
};

interface ObjectInterface {
  name: string;
  age: number;
};

let object: ObjectType = {
  name: 'Tom',
  age: 20
};

let object2: ObjectInterface = {
  name: 'Lin',
  age: 24
};
