export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  Augast,
  September,
  Octorber,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// const MonthsJS = {
//   January: 0,
//   February: 1,
//   December: 11,
// };

// console.log(MonthsJS.January);
// console.log(MonthsJS.February);
// console.log(MonthsJS.December);

enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000',
}

let green = COLORS.GREEN;
console.log({ green });

enum COLORS {
  YELLOW = '#FFFF00',
}

console.log(COLORS.YELLOW);
