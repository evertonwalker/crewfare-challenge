export interface FilterState {
  search: string;
  searchStatus: string[];
}

export interface FilterChangeHandler {
  (filters: FilterState): void;
}

export interface FilterContentProps {
  availableStatus: string[];
  onFiltersChange: FilterChangeHandler;
}
