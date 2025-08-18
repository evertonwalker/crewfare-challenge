import { useState, useEffect } from 'react';
import { BookingsService } from '../services';
import { RoomingList } from '../services/types';
import { extractUniqueStatuses } from '../utils';

export function useBooks() {
  const [data, setData] = useState<RoomingList[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setLoading(true);
        const response = await BookingsService.getBookings();
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao carregar dados');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  const statusAvailablesToFilter = extractUniqueStatuses(data);

  const filterByStatus = (statuses: string | string[]): RoomingList[] => {
    if (!statuses || statuses.length === 0) return data;
    
    const statusArray = Array.isArray(statuses) ? statuses : [statuses];
    
    return data.filter((item) => statusArray.includes(item.status));
  };

  return {
    data,
    statusAvailablesToFilter,
    filterByStatus,
    loading,
    error
  };
}
