import { useState, useMemo } from 'react';
import { foodData } from '../data/foodData';
import SearchBar from '../components/SearchBar/SearchBar';
import FilterDropdown from '../components/FilterDropdown/FilterDropdown';
import FoodCard from '../components/FoodCard/FoodCard';
import ThemeToggle from '../components/ThemeToggle/ThemeToggle';
import Footer from '../components/footer/Footer.jsx';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);

  const filteredFoods = useMemo(() => {
    return foodData.filter(food => {
      const matchesSearch = food.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          food.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesFilters = selectedFilters.length === 0 ||
                            selectedFilters.some(filter => food.classifications.includes(filter));
      
      return matchesSearch && matchesFilters;
    });
  }, [searchQuery, selectedFilters]);

  return (
    <div>
    <div className="min-h-screen p-6 md:p-8">
      <ThemeToggle />
      
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Discover Delicious Food
        </h1>

        <div className="flex flex-col gap-6 mb-8">
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          
          <FilterDropdown
            selectedFilters={selectedFilters}
            onFilterChange={setSelectedFilters}
          />
        </div>

        {filteredFoods.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredFoods.map(food => (
              <FoodCard key={food.id} food={food} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-[rgb(var(--color-muted))]">
              No results found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>

    <Footer entrepriseName={'Leno'} enterpriseLogo='Leno.png'/>
    </div>
  );
}