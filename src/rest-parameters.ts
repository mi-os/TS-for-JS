export {};

const reducer: (acc: number, cur: number) => number = (
  acc: number,
  cur: number
) => {
  console.log({ acc, cur });
  return acc + cur;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
