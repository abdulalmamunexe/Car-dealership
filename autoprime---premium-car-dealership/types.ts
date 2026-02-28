
export enum CarCondition {
  NEW = 'NEW',
  USED = 'USED',
  CERTIFIED = 'CERTIFIED'
}

export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  condition: CarCondition;
  fuelType: 'Gasoline' | 'Electric' | 'Hybrid' | 'Diesel';
  transmission: 'Automatic' | 'Manual';
  bodyType: 'SUV' | 'Sedan' | 'Truck' | 'Coupe' | 'Convertible';
  imageUrl: string;
  description: string;
  features: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface SearchFilters {
  make?: string;
  minPrice?: number;
  maxPrice?: number;
  condition?: CarCondition;
  bodyType?: string;
}
