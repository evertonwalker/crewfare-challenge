'use client';

import { useState } from 'react';
import { FilterInput, FilterDropdown } from '@/shared/components';

export default function Home() {
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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Crew Challenge
          </h1>
          <p className="text-xl text-gray-600">
            Demonstração dos componentes FilterInput e FilterDropdown
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-500">
            <div className="text-center">
              <span className="font-semibold">Valor digitado:</span>
              <div className="font-mono bg-gray-100 px-2 py-1 rounded mt-1">
                {searchValue || '(vazio)'}
              </div>
            </div>
            
            <div className="text-center">
              <span className="font-semibold">Filtros selecionados:</span>
              <div className="font-mono bg-gray-100 px-2 py-1 rounded mt-1">
                {selectedFilters.length > 0 ? selectedFilters.join(', ') : '(nenhum)'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
