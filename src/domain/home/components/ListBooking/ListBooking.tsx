import React from 'react';
import { BookingCard } from '@/shared/components';
import styles from './ListBooking.module.css';
import { Booking, RoomingListData } from '../../types';

interface ListBookingProps {
  data: Array<RoomingListData>;
  className?: string;
}

export function ListBooking({ data, className }: ListBookingProps) {
  // Função para formatar o período do evento baseado nas datas de check-in/check-out
  const formatEventDateRange = (bookings: Booking[]): string => {
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



  return (
    <div className={`mb-8 ${className || ''}`}>
      {data.map((roomingList, roomingIndex) => {
        const eventDateRange = formatEventDateRange(roomingList.bookings);
        
        return (
          <div key={roomingList.roomingListId} className="mb-12">
            {/* Título do Evento com flexbox e gap de 20px */}
            <div className="flex items-center justify-center mb-6">
              {/* Linha horizontal esquerda com gradiente */}
              <div className={`${styles.gradientLine} ${roomingIndex % 2 === 0 ? styles.gradientLineLeftPurple : styles.gradientLineLeftTeal}`}></div>
              
              {/* Label centralizado */}
              <div className={`${styles.eventNameLabel} ${roomingIndex % 2 === 0 ? styles.eventNameLabelPurple : styles.eventNameLabelTeal}`}>
                <h2 className={`text-sm font-bold leading-5 ${styles.eventNameTitle} ${roomingIndex % 2 === 0 ? styles.eventNameTitlePurple : styles.eventNameTitleTeal}`}>
                  {roomingList.eventName}
                </h2>
              </div>
              
              {/* Linha horizontal direita com gradiente */}
              <div className={`${styles.gradientLine} ${roomingIndex % 2 === 0 ? styles.gradientLineRightPurple : styles.gradientLineRightTeal}`}></div>
            </div>

            {/* Container com scroll horizontal para os cards */}
            <div className={`overflow-x-auto ${styles.scrollContainer}`}>
              <div className="flex gap-4 pb-6 min-w-max">
                {roomingList.bookings.map((booking, index) => (
                  <div key={booking.bookingId} className="flex-shrink-0">
                    <BookingCard
                      rfpName={roomingList.rfpName}
                      agreement={roomingList.agreement_type}
                      cutOffDate={roomingList.cutOffDate}
                      eventDateRange={eventDateRange}
                      bookingCount={roomingList.bookings.length}
                      onViewBookings={() => console.log(`View Bookings for ${roomingList.eventName}`)}
                      onViewDocument={() => console.log(`View Document for ${roomingList.eventName}`)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
