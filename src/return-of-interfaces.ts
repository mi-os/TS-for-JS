export {};

class Wizard {}
class Monk {}

class BlackWizard extends Wizard {}

interface Philosopher {
  heal(): void;
}

interface Warrior {
  attack(): void;
}

class WhiteWizard implements Philosopher, Warrior {
  heal(): void {
    console.log('heal');
  }
  attack(): void {
    console.log('attack');
  }
}

const whiteWizard = new WhiteWizard();
whiteWizard.heal();
whiteWizard.attack();
