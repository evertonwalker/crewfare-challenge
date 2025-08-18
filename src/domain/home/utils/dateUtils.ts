export const formatEventDateRange = (bookings: any[]): string => {
  if (bookings.length === 0) return 'No dates available';
  
  const checkInDates = bookings.map(b => new Date(b.checkInDate));
  const checkOutDates = bookings.map(b => new Date(b.checkOutDate));
  
  const earliestCheckIn = new Date(Math.min(...checkInDates.map(d => d.getTime())));
  const latestCheckOut = new Date(Math.max(...checkOutDates.map(d => d.getTime())));
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };
  
  const year = earliestCheckIn.getFullYear();
  return `${formatDate(earliestCheckIn)} - ${formatDate(latestCheckOut)}, ${year}`;
};

export const formatCutOffDate = (dateString: string) => {
  const date = new Date(dateString);
  const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
  const day = date.getDate();
  return { month, day };
};
