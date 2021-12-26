export {};

// Requirements
// * owner
//  can't change it midway
//  can be referenced

// * secretNumber
//  personalNumber
//  can change it midway
//  can't be referenced

class MyID {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyID('Tom', 1234567890);
console.log(card.debugPrint());
card.secretNumber = 1111111111;
console.log(card.debugPrint());
// card.owner = 'Mike';
console.log(card.owner);
// card.secretNumber;
// card._secretNumber;
console.log(card.secretNumber);
