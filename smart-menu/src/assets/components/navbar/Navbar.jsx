import React, { useState, useEffect, useRef } from 'react';
import { Search, Moon, Sun, ChevronDown } from 'lucide-react';
import { classifications } from '../../data/foodData';

export const Navbar = ({ searchTerm, setSearchTerm, selectedFilters, setSelectedFilters }) => {
  const [isDark, setIsDark] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    setIsDark(theme === 'dark');
    document.documentElement.classList.add(theme);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.classList.remove(isDark ? 'dark' : 'light');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleFilter = (filter) => {
    setSelectedFilters(
      selectedFilters.includes(filter)
        ? selectedFilters.filter(f => f !== filter)
        : [...selectedFilters, filter]
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-opacity-95 backdrop-blur-sm bg-[var(--bg-secondary)] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0">
              <span className="text-[var(--text-primary)] text-sm font-bold pr-2">
                User
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-[var(--text-secondary)]" />
                </div>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-[var(--text-secondary)] rounded-md leading-5 bg-[var(--bg-primary)] placeholder-[var(--text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent sm:text-sm"
                  placeholder="Search foods..."
                />
              </div>

              <div className="relative" ref={filterRef}>
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="inline-flex items-center px-4 py-2 border border-[var(--text-secondary)] rounded-md text-sm font-medium hover:bg-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)]"
                >
                  Filters
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>

                {isFilterOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[var(--bg-primary)] ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu">
                      {classifications.map((filter) => (
                        <label
                          key={filter}
                          className="flex items-center px-4 py-2 text-sm cursor-pointer hover:bg-[var(--hover-color)]"
                        >
                          <input
                            type="checkbox"
                            checked={selectedFilters.includes(filter)}
                            onChange={() => toggleFilter(filter)}
                            className="mr-2"
                          />
                          {filter}
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-[var(--hover-color)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)]"
              >
                {isDark ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};