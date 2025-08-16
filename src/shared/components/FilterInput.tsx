import React from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FilterInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function FilterInput({ 
  value, 
  onChange, 
  placeholder = "Search", 
  className 
}: FilterInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    onChange(e.currentTarget.value);
  };

  return (
    <div className={cn(
      "relative flex items-center w-full",
      className
    )}>
      {/* Ícone da lupa */}
      <div className="absolute left-2 flex items-center justify-center">
        <div className="w-10 h-10 rounded-md border border-gray-200 bg-gray-50 flex items-center justify-center">
          <Search className="w-5 h-5 text-gray-500" />
        </div>
      </div>
      
      {/* Campo de input */}
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        placeholder={placeholder}
        className="w-full pl-14 pr-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
      />
    </div>
  );
}
