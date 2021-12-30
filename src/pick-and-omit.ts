export {};

type DetailProfile = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailProfile, 'name' | 'height'>;
type SmallProfile = Omit<DetailProfile, 'weight'>;
