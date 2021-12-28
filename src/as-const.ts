export {};

let name = 'Tom';

let nickname = 'Rich' as const;
nickname = 'Rich';

let profile = {
  name: 'Tom',
  height: 178,
} as const;

// profile.name = 'Rich';
// profile.height = 180;
