import React, { useState, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import './FilterDropdown.css';

interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
}

interface FilterDropdownProps {
  title: string;
  options: FilterOption[];
  onSave: (selectedOptions: string[]) => void;
  className?: string;
}

export function FilterDropdown({
  title,
  options,
  onSave,
  className
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<FilterOption[]>([]);

  // Synchronize internal state with props when they change
  useEffect(() => {
    setSelectedOptions(options.map(opt => ({ ...opt })));
  }, [options]);

  const handleOptionToggle = (optionId: string) => {
    setSelectedOptions(prev => 
      prev.map(opt => 
        opt.id === optionId 
          ? { ...opt, checked: !opt.checked }
          : opt
      )
    );
  };

  const handleSave = () => {
    const selectedIds = selectedOptions
      .filter(opt => opt.checked)
      .map(opt => opt.id);
    
    onSave(selectedIds);
    setIsOpen(false);
  };

  const selectedCount = selectedOptions.filter(opt => opt.checked).length;

  return (
    <div className={cn("relative", className)}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
      >
        <span className="text-sm font-medium text-gray-700">
          {title}
        </span>
        <div className="flex items-center gap-2">
          {selectedCount > 0 && (
            <span className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full">
              {selectedCount}
            </span>
          )}
          <ChevronDown className={cn(
            "w-4 h-4 text-gray-400 transition-transform duration-200",
            isOpen && "rotate-180"
          )} />
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          {/* Options List */}
          <div className="max-h-48 overflow-y-auto p-2">
            {selectedOptions.map((option) => (
              <label
                key={option.id}
                className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 rounded-md cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={option.checked}
                  onChange={() => handleOptionToggle(option.id)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>

          {/* Save Button */}
          <div className="border-t border-gray-200 p-3">
            <button
              onClick={handleSave}
              className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
