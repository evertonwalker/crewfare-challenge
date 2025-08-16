import React, { useState } from 'react';
import { FilterInput, FilterDropdown, BookingCard } from '@/shared/components';

export function FilterContent() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    console.log('Search value changed:', value);
  };

  const handleFiltersSave = (filters: string[]) => {
    setSelectedFilters(filters);
    console.log('Filters saved:', filters);
  };

  return (
    <div className="mb-8">
      {/* Container dos filtros */}
      <div className="flex flex-col sm:flex-row gap-4">
        <FilterInput
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="flex-1"
        />
        
        <FilterDropdown
          title="RFP STATUS"
          options={[
            { id: 'active', label: 'Active', checked: false },
            { id: 'closed', label: 'Closed', checked: true },
            { id: 'canceled', label: 'Canceled', checked: false }
          ]}
          onSave={handleFiltersSave}
        />
      </div>
    </div>
  );
}
