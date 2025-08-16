import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

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
  const [selectedOptions, setSelectedOptions] = useState<FilterOption[]>(
    options.map(opt => ({ ...opt }))
  );

  const handleOptionChange = (optionId: string) => {
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

  const checkedCount = selectedOptions.filter(opt => opt.checked).length;

  return (
    <div className={cn("relative", className)}>
      {/* Botão de Filtros */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center justify-center gap-2 px-4 py-3 bg-white border border-purple-500 rounded-lg text-gray-900 font-medium transition-all duration-200 w-full h-[48px]",
          isOpen && "ring-2 ring-purple-200"
        )}
      >
        <Filter className="w-4 h-4 text-blue-400" />
        <span>Filters</span>
        <div className="w-6 h-5 flex items-center justify-center">
          {checkedCount > 0 ? (
            <span className="px-2 py-0.5 bg-purple-100 text-purple-700 text-xs rounded-full min-w-[20px] text-center">
              {checkedCount}
            </span>
          ) : (
            <div className="w-5 h-5" />
          )}
        </div>
        <ChevronDown className={cn(
          "w-4 h-4 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Overlay para fechar ao clicar fora */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Painel do Dropdown */}
          <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
            {/* Header */}
            <div className="px-4 py-3 border-b border-gray-100">
              <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                {title}
              </h3>
            </div>

            {/* Opções */}
            <div className="p-4 space-y-3">
              {selectedOptions.map((option) => (
                <label key={option.id} className="flex items-center gap-3 cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={option.checked}
                      onChange={() => handleOptionChange(option.id)}
                      className="sr-only"
                    />
                    <div className={cn(
                      "w-4 h-4 border-2 rounded transition-colors duration-200",
                      option.checked
                        ? "bg-green-500 border-green-500"
                        : "border-gray-300 bg-white"
                    )}>
                      {option.checked && (
                        <svg className="w-3 h-3 text-white absolute inset-0 m-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-sm text-gray-900">{option.label}</span>
                </label>
              ))}
            </div>

            {/* Botão Salvar */}
            <div className="px-4 py-3 border-t border-gray-100">
              <button
                onClick={handleSave}
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Save
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
