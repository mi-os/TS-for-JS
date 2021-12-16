export {};

type Player1 = {
  power: number;
};

type Monster1 = {
  hp: number;
};

const Knight: Player1 = {
  power: 200
};

const Dragon: Monster1 = {
  hp: 180
};

// type Monster2 = {
//   power: number;
//   hp: number;
// };

type Monster2 = Player1 & Monster1;

const Boss: Monster2 = {
  power: 240,
  hp: 300
};
