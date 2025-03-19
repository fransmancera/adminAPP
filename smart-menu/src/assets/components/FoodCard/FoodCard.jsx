import React from 'react';
import { Clock, Star, Siren as Fire, DollarSign } from 'lucide-react';

export const FoodCard = ({ food }) => {
  return (
    <div className="bg-[var(--bg-secondary)] rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={food.image}
          alt={food.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16" />
      </div>

      <div className="p-4">
        <div className="flex justify-between items-center mb-4 text-[var(--text-secondary)]">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span className="text-sm">{food.prepTime}</span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1 text-yellow-400" />
            <span className="text-sm">{food.rating}</span>
          </div>
          <div className="flex items-center">
            <Fire className="h-4 w-4 mr-1 text-red-500" />
            <span className="text-sm">{food.calories} cal</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1" />
            <span className="text-sm">{food.price}</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2">{food.name}</h3>
        <p className="text-[var(--text-secondary)] text-sm mb-3">
          {food.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {food.classifications.map((classification) => (
            <span
              key={classification}
              className="px-2 py-1 text-xs rounded-full bg-[var(--primary)] text-white"
            >
              {classification}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};