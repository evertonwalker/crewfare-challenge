import { RoomingList } from '../services/types';
import { FilterState } from '../types/filters.types';

export const filterBookings = (
  data: RoomingList[], 
  filters: FilterState
): RoomingList[] => {
  if (!data) return [];

  return data.filter((roomingList) => {
    // Status filter
    if (filters.searchStatus.length > 0 && !filters.searchStatus.includes(roomingList.status)) {
      return false;
    }

    // Search filter (RFP name, event name)
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesRfpName = roomingList.rfpName.toLowerCase().includes(searchLower);
      const matchesEventName = roomingList.eventName.toLowerCase().includes(searchLower);
      
      if (!matchesRfpName && !matchesEventName) {
        return false;
      }
    }

    return true;
  });
};

export const extractUniqueStatuses = (data: RoomingList[]): string[] => {
  return data.reduce((acc: string[], item) => {
    if (!acc.includes(item.status)) {
      acc.push(item.status);
    }
    return acc;
  }, []);
};
