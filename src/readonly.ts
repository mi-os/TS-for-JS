export {};

class CreditCard {
  constructor(public readonly owner: string) {}
}

let myCreditCard = new CreditCard('Tom');
console.log(myCreditCard.owner);
// myCreditCard.owner = 'Mike';
