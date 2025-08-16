import React from 'react';
import { Calendar, Eye, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BookingCardProps {
  rfpName: string;
  agreement: string;
  cutOffDate: string;
  eventDateRange: string;
  bookingCount: number;
  onViewBookings?: () => void;
  onViewDocument?: () => void;
  className?: string;
}

export function BookingCard({
  rfpName,
  agreement,
  cutOffDate,
  eventDateRange,
  bookingCount,
  onViewBookings,
  onViewDocument,
  className
}: BookingCardProps) {
  // Função para formatar a data de cut-off
  const formatCutOffDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
    const day = date.getDate();
    return { month, day };
  };

  const { month, day } = formatCutOffDate(cutOffDate);

  return (
    <div className={cn(
      "bg-white rounded-lg border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow duration-200 w-full md:w-[400px]",
      className
    )}>
      {/* Top Section */}
      <div className="flex justify-between items-start mb-4">
        {/* Left Side - RFP Name and Agreement */}
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {rfpName}
          </h3>
          <p className="text-sm text-gray-600">
            Agreement: <span className="font-bold text-gray-900">{agreement}</span>
          </p>
        </div>

        {/* Right Side - Cut-Off Date */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-14 bg-blue-100 rounded-lg flex flex-col items-center justify-center mb-1">
            <span className="text-xs font-medium text-blue-600">{month}</span>
            <span className="text-lg font-bold text-blue-800">{day}</span>
          </div>
          <span className="text-xs text-gray-500">Cut-Off Date</span>
        </div>
      </div>

      {/* Middle Section - Event Date Range */}
      <div className="flex items-center mb-6">
        <Calendar className="w-4 h-4 text-gray-400 mr-2" />
        <span className="text-sm text-gray-600">{eventDateRange}</span>
      </div>

      {/* Bottom Section - Action Buttons */}
      <div className="flex gap-3">
        {/* View Bookings Button */}
        <button
          onClick={onViewBookings}
          className="flex-1 bg-[#4323FF] hover:bg-[#3A1FE6] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
        >
          <Eye className="w-4 h-4 mr-2" />
          View Bookings ({bookingCount})
        </button>

        {/* View Document Button */}
        <button
          onClick={onViewDocument}
          className="w-12 h-12 bg-[#4323FF] hover:bg-[#3A1FE6] text-white rounded-lg transition-colors duration-200 flex items-center justify-center"
          title="View Document"
        >
          <FileText className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
