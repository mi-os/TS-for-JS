export {};

// Record<K, T>

type Countries = 'England' | 'Japan' | 'USA';

type Info = {
  capital: string;
  countryCode: number;
};

const countriesInfo: Record<Countries, Info> = {
  England: { capital: 'London', countryCode: 44 },
  Japan: { capital: 'Tokyo', countryCode: 81 },
  USA: { capital: 'Washington', countryCode: 1 },
  // Spain: { capital: 'Madrid', countryCode: 34 },
};
