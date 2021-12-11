export {};

// void ... that expects the return value to have no type.
function returnNothing(): void {
  console.log("I don't return anything.");
}

console.log(returnNothing());
