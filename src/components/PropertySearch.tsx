import React from 'react';
import { Search, MapPin, Building, DollarSign, BedDouble, RotateCcw } from 'lucide-react';
import { FilterState } from '../types';

interface PropertySearchProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onResetFilters: () => void;
  onExecuteSearch: () => void;
  totalResults: number;
}

export const PropertySearch: React.FC<PropertySearchProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  onExecuteSearch,
  totalResults
}) => {
  const isFiltered =
    filters.location !== 'all' ||
    filters.propertyType !== 'all' ||
    filters.priceRange !== 'all' ||
    filters.bedrooms !== 'all';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onExecuteSearch();
  };

  return (
    <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12">
      <div className="bg-white rounded-2xl shadow-2xl border border-neutral-200/80 p-5 sm:p-7 backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-5 border-b border-neutral-100 gap-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-700">
              Curated Portfolio Search
            </span>
            <h2 className="text-base sm:text-lg font-semibold text-neutral-900">
              Search homes, apartments, and investment properties
            </h2>
          </div>

          <div className="flex items-center gap-3 text-xs text-neutral-500 self-end sm:self-auto">
            <span>
              Showing <strong className="text-neutral-900 font-semibold">{totalResults}</strong> properties
            </span>
            {isFiltered && (
              <button
                type="button"
                onClick={onResetFilters}
                className="inline-flex items-center gap-1 text-amber-700 hover:text-amber-800 font-medium transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                Reset filters
              </button>
            )}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Location Select */}
            <div className="relative">
              <label htmlFor="search-location" className="block text-xs font-medium text-neutral-500 mb-1">
                Location
              </label>
              <div className="relative flex items-center">
                <MapPin className="w-4 h-4 text-neutral-400 absolute left-3 pointer-events-none" />
                <select
                  id="search-location"
                  value={filters.location}
                  onChange={(e) => onFilterChange('location', e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 bg-neutral-50 hover:bg-neutral-100/70 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors cursor-pointer"
                >
                  <option value="all">All USA Locations</option>
                  <option value="New York">New York (NYC & Brooklyn)</option>
                  <option value="California">California (Los Angeles)</option>
                  <option value="Florida">Florida (Miami Beach)</option>
                  <option value="Massachusetts">Massachusetts (Boston)</option>
                  <option value="Texas">Texas (Austin)</option>
                </select>
              </div>
            </div>

            {/* Property Type Select */}
            <div className="relative">
              <label htmlFor="search-type" className="block text-xs font-medium text-neutral-500 mb-1">
                Property Type
              </label>
              <div className="relative flex items-center">
                <Building className="w-4 h-4 text-neutral-400 absolute left-3 pointer-events-none" />
                <select
                  id="search-type"
                  value={filters.propertyType}
                  onChange={(e) => onFilterChange('propertyType', e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 bg-neutral-50 hover:bg-neutral-100/70 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors cursor-pointer"
                >
                  <option value="all">All Property Types</option>
                  <option value="Single Family">Single Family Home</option>
                  <option value="Penthouse">Luxury Penthouse</option>
                  <option value="Luxury Estate">Luxury Estate</option>
                  <option value="Townhome">Townhome</option>
                  <option value="Condominium">Condominium</option>
                </select>
              </div>
            </div>

            {/* Price Range */}
            <div className="relative">
              <label htmlFor="search-price" className="block text-xs font-medium text-neutral-500 mb-1">
                Price Range
              </label>
              <div className="relative flex items-center">
                <DollarSign className="w-4 h-4 text-neutral-400 absolute left-3 pointer-events-none" />
                <select
                  id="search-price"
                  value={filters.priceRange}
                  onChange={(e) => onFilterChange('priceRange', e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 bg-neutral-50 hover:bg-neutral-100/70 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors cursor-pointer"
                >
                  <option value="all">Any Price Range</option>
                  <option value="under-1m">Under $1,000,000</option>
                  <option value="1m-3m">$1,000,000 – $3,000,000</option>
                  <option value="3m-plus">$3,000,000+</option>
                  <option value="rental">Luxury Rentals</option>
                </select>
              </div>
            </div>

            {/* Bedrooms */}
            <div className="relative">
              <label htmlFor="search-beds" className="block text-xs font-medium text-neutral-500 mb-1">
                Bedrooms
              </label>
              <div className="relative flex items-center">
                <BedDouble className="w-4 h-4 text-neutral-400 absolute left-3 pointer-events-none" />
                <select
                  id="search-beds"
                  value={filters.bedrooms}
                  onChange={(e) => onFilterChange('bedrooms', e.target.value)}
                  className="w-full pl-9 pr-8 py-2.5 bg-neutral-50 hover:bg-neutral-100/70 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors cursor-pointer"
                >
                  <option value="all">Any Bedrooms</option>
                  <option value="3">3+ Bedrooms</option>
                  <option value="4">4+ Bedrooms</option>
                  <option value="5">5+ Bedrooms</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-end">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3 rounded-xl text-sm font-semibold text-neutral-950 bg-amber-300 hover:bg-amber-200 transition-colors shadow-sm active:scale-[0.99] cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Search Properties</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
