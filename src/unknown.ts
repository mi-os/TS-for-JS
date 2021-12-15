export {};

const func = (): number => 24;

let numberAny: any = func();
//unknown is a type-safe any
let numberUnknown: unknown = func();

let sumAny = numberAny + 10;
// Type Guards
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
