
import React from 'react';
import { Car, CarCondition } from '../types';

interface CarCardProps {
  car: Car;
  onClick: (car: Car) => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onClick }) => {
  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer flex flex-col"
      onClick={() => onClick(car)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={car.imageUrl} 
          alt={`${car.make} ${car.model}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
            car.condition === CarCondition.NEW ? 'bg-blue-600 text-white' : 'bg-gray-800 text-white'
          }`}>
            {car.condition}
          </span>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-gray-900 leading-tight">
              {car.year} {car.make} {car.model}
            </h3>
            <p className="text-sm text-gray-500">{car.bodyType} • {car.transmission}</p>
          </div>
          <p className="text-xl font-extrabold text-blue-600">
            ${car.price.toLocaleString()}
          </p>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            {car.fuelType}
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {car.mileage.toLocaleString()} mi
          </div>
        </div>

        <button className="mt-auto pt-4 text-blue-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
          View Details
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </div>
  );
};

export default CarCard;
