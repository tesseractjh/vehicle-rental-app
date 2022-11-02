export type Response = { payload: Car[] };

export type Car = {
  id: number;
  amount: number;
  attribute: Attribute;
  startDate: Date;
  createdAt: Date;
  insurance: Insurance[];
  additionalProducts?: AdditionalProducts[];
};

export type Attribute = {
  brand: string;
  name: string;
  segment: Segment;
  fuelType: Fuel;
  imageUrl: string;
};

export type Insurance = {
  name: string;
  description: string;
};

export type AdditionalProducts = {
  name: string;
  amount: number;
};

export type Segment = 'C' | 'D' | 'E' | 'SUV' | 'ALL';
export type Fuel = 'gasoline' | 'hybrid' | 'ev';
