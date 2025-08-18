import React, { useState } from 'react';
import { FilterInput, FilterDropdown } from '@/shared/components';
import { FilterContentProps } from '../../types/filters.types';

export function FilterContent({ availableStatus, onFiltersChange }: FilterContentProps) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onFiltersChange({ search: value, searchStatus: selectedStatuses });
  };

  const handleStatusesSave = (statuses: string[]) => {
    setSelectedStatuses(statuses);
    onFiltersChange({ search: searchValue, searchStatus: statuses });
  };

  // Convert available status to the format expected by FilterDropdown
  const statusOptions = availableStatus.map(status => ({
    id: status,
    label: status.charAt(0).toUpperCase() + status.slice(1), // Capitalize first letter
    checked: selectedStatuses.includes(status)
  }));

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <FilterInput
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search"
          className="w-full md:w-[280px]"
        />
        
        <FilterDropdown
          title="RFP STATUS"
          options={statusOptions}
          onSave={handleStatusesSave}
        />
      </div>
    </div>
  );
}
