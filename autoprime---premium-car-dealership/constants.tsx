
import { Car, CarCondition } from './types';

export const MOCK_CARS: Car[] = [
  {
    id: '1',
    make: 'Tesla',
    model: 'Model 3',
    year: 2024,
    price: 42990,
    mileage: 0,
    condition: CarCondition.NEW,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    imageUrl: 'https://picsum.photos/id/111/800/600',
    description: 'The ultimate electric sedan with long range and autopilot.',
    features: ['Autopilot', 'Panoramic Roof', 'Premium Audio']
  },
  {
    id: '2',
    make: 'Toyota',
    model: 'RAV4 Hybrid',
    year: 2023,
    price: 34500,
    mileage: 12500,
    condition: CarCondition.USED,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    bodyType: 'SUV',
    imageUrl: 'https://picsum.photos/id/133/800/600',
    description: 'Reliable and fuel-efficient SUV for the modern family.',
    features: ['All-Wheel Drive', 'Adaptive Cruise Control', 'Heated Seats']
  },
  {
    id: '3',
    make: 'Ford',
    model: 'F-150 Lightning',
    year: 2024,
    price: 59995,
    mileage: 0,
    condition: CarCondition.NEW,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'Truck',
    imageUrl: 'https://picsum.photos/id/183/800/600',
    description: 'The smartest, most innovative truck Ford has ever built.',
    features: ['Mega Power Frunk', 'Pro Power Onboard', 'Tow Package']
  },
  {
    id: '4',
    make: 'Porsche',
    model: '911 Carrera',
    year: 2022,
    price: 112000,
    mileage: 5600,
    condition: CarCondition.USED,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    imageUrl: 'https://picsum.photos/id/1071/800/600',
    description: 'The benchmark for sports cars everywhere.',
    features: ['Sport Chrono Package', 'Bose Surround Sound', 'PDLS+ Lights']
  },
  {
    id: '5',
    make: 'Honda',
    model: 'Civic Type R',
    year: 2024,
    price: 44795,
    mileage: 0,
    condition: CarCondition.NEW,
    fuelType: 'Gasoline',
    transmission: 'Manual',
    bodyType: 'Sedan',
    imageUrl: 'https://picsum.photos/id/1072/800/600',
    description: 'The fastest, most capable Civic ever.',
    features: ['Brembo Brakes', 'VTEC Turbo', 'Recaro Seats']
  }
];

export const MAKES = ['Tesla', 'Toyota', 'Ford', 'Porsche', 'Honda', 'BMW', 'Mercedes-Benz', 'Audi', 'Lexus'];
export const BODY_TYPES = ['SUV', 'Sedan', 'Truck', 'Coupe', 'Convertible'];
