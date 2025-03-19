import React, { useState, useMemo } from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Carousel } from '../components/Carousel/Carousel';
import { Banner } from '../components/Banner/Banner';
import { FoodCard } from '../components/FoodCard/FoodCard';
import { foodData } from '../data/foodData';

const MockHome = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filteredFoods = useMemo(() => {
    return foodData.filter((food) => {
      const matchesSearch = food.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
        food.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilters =
        selectedFilters.length === 0 ||
        selectedFilters.some((filter) =>
          food.classifications.includes(filter)
        );

      return matchesSearch && matchesFilters;
    });
  }, [searchTerm, selectedFilters]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      
      <Carousel />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Banner />

        <div className="mt-8">
          {filteredFoods.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold">No results found</h3>
              <p className="text-[var(--text-secondary)] mt-2">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredFoods.map((food) => (
                <FoodCard key={food.id} food={food} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MockHome;