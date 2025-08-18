import React from 'react';
import { BookingCard, Loading } from '@/shared/components';
import styles from './ListBooking.module.css';
import { ListBookingProps } from '../../types/actions.types';
import { formatEventDateRange } from '../../utils/dateUtils';

export function ListBooking({ 
  className, 
  data, 
  loading, 
  error, 
  onViewBookings, 
  onViewDocument 
}: ListBookingProps) {
  // Loading state
  if (loading) {
    return (
      <div className={`mb-8 ${className || ''}`}>
        <Loading size="large" />
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className={`mb-8 ${className || ''}`}>
        <div className="text-center py-8">
          <p className="text-red-600 text-lg">Error: {error}</p>
        </div>
      </div>
    );
  }

  // Empty data state
  if (!data || data.length === 0) {
    return (
      <div className={`mb-8 ${className || ''}`}>
        <div className="text-center py-8">
          <p className="text-gray-600 text-lg">There are no events available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`mb-8 ${className || ''}`}>
      {data.map((roomingList, roomingIndex) => {
        const eventDateRange = formatEventDateRange(roomingList.bookings);
        
        return (
          <div key={roomingList.roomingListId} className="mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className={`${styles.gradientLine} ${roomingIndex % 2 === 0 ? styles.gradientLineLeftPurple : styles.gradientLineLeftTeal}`}></div>
              
              <div className={`${styles.eventNameLabel} ${roomingIndex % 2 === 0 ? styles.eventNameLabelPurple : styles.eventNameLabelTeal}`}>
                <h2 className={`text-sm font-bold leading-5 ${styles.eventNameTitle} ${roomingIndex % 2 === 0 ? styles.eventNameTitlePurple : styles.eventNameTitleTeal}`}>
                  {roomingList.eventName}
                </h2>
              </div>
              
              <div className={`${styles.gradientLine} ${roomingIndex % 2 === 0 ? styles.gradientLineRightPurple : styles.gradientLineRightTeal}`}></div>
            </div>

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
                      onViewBookings={() => onViewBookings(roomingList.eventName)}
                      onViewDocument={() => onViewDocument(roomingList.eventName)}
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
