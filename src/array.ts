export {};

let numbers: number[] = [1, 2, 3];

let numbers2: Array<number> = [1, 2, 3];
let string2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

let numbers3: number[][] = [
  [50, 100],
  [150, 300]
];

// Union Types
let arr: (string | number | boolean)[] = [1, false, 'Japan'];
