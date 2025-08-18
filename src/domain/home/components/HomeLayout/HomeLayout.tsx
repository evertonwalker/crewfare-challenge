import React, { useState, useMemo } from 'react';
import { FilterContent } from '../FilterContent';
import { ListBooking } from '../ListBooking';
import { useBooks } from '../../hooks';
import { RoomingList } from '../../services/types';
import { FilterState } from '../../types/filters.types';
import { filterBookings } from '../../utils';

export function HomeLayout() {
  const { data, statusAvailablesToFilter, loading, error } = useBooks();
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    search: '',
    searchStatus: []
  });

  // Filter data based on active filters using utility
  const filteredData = useMemo(() => {
    return filterBookings(data, activeFilters);
  }, [data, activeFilters]);

  const handleFiltersChange = (filters: FilterState) => {
    setActiveFilters(filters);
  };

  const handleViewBookings = (eventName: string) => {
    console.log(`View Bookings for ${eventName}`);
    // Here you can implement the logic to view bookings
  };

  const handleViewDocument = (eventName: string) => {
    console.log(`View Document for ${eventName}`);
    // Here you can implement the logic to view the document
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto px-4 max-w-7xl">
        <div className="pt-[46px] pb-[46px] px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Rooming List Management: Events
          </h1>
        </div>
        
        <FilterContent 
          availableStatus={statusAvailablesToFilter}
          onFiltersChange={handleFiltersChange}
        />
        
        <ListBooking 
          data={filteredData}
          loading={loading}
          error={error}
          onViewBookings={handleViewBookings}
          onViewDocument={handleViewDocument}
        />
      </div>
    </div>
  );
}
