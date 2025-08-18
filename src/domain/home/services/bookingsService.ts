import { GetBookingsResponse } from './types';

export class BookingsService {
  static async getBookings(): Promise<GetBookingsResponse> {
    // Simulating API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Returning mocked data
    return {
      data: [
        {
          roomingListId: 1,
          eventId: 101,
          eventName: "Tech Conference 2024",
          hotelId: 201,
          rfpName: "RFP-TECH-001",
          cutOffDate: "2024-03-15",
          status: "completed",
          agreement_type: "Standard",
          bookings: [
            {
              bookingId: 1001,
              hotelId: 201,
              eventId: 101,
              guestName: "John Doe",
              guestPhoneNumber: "+1-555-0101",
              checkInDate: "2024-04-01",
              checkOutDate: "2024-04-03"
            },
            {
              bookingId: 1002,
              hotelId: 201,
              eventId: 101,
              guestName: "Jane Smith",
              guestPhoneNumber: "+1-555-0102",
              checkInDate: "2024-04-01",
              checkOutDate: "2024-04-04"
            }
          ]
        },
        {
          roomingListId: 2,
          eventId: 102,
          eventName: "Marketing Summit",
          hotelId: 202,
          rfpName: "RFP-MKT-002",
          cutOffDate: "2024-03-20",
          status: "received",
          agreement_type: "Premium",
          bookings: [
            {
              bookingId: 2001,
              hotelId: 202,
              eventId: 102,
              guestName: "Bob Johnson",
              guestPhoneNumber: "+1-555-0201",
              checkInDate: "2024-04-15",
              checkOutDate: "2024-04-17"
            }
          ]
        },
        {
          roomingListId: 3,
          eventId: 103,
          eventName: "Sales Workshop",
          hotelId: 203,
          rfpName: "RFP-SALES-003",
          cutOffDate: "2024-03-25",
          status: "archived",
          agreement_type: "Basic",
          bookings: []
        },
        {
          roomingListId: 4,
          eventId: 104,
          eventName: "Product Launch",
          hotelId: 204,
          rfpName: "RFP-PROD-004",
          cutOffDate: "2024-04-01",
          status: "confirmed",
          agreement_type: "Luxury",
          bookings: [
            {
              bookingId: 4001,
              hotelId: 204,
              eventId: 104,
              guestName: "Alice Brown",
              guestPhoneNumber: "+1-555-0401",
              checkInDate: "2024-05-01",
              checkOutDate: "2024-05-03"
            },
            {
              bookingId: 4002,
              hotelId: 204,
              eventId: 104,
              guestName: "Charlie Wilson",
              guestPhoneNumber: "+1-555-0402",
              checkInDate: "2024-05-01",
              checkOutDate: "2024-05-04"
            },
            {
              bookingId: 4003,
              hotelId: 204,
              eventId: 104,
              guestName: "Diana Davis",
              guestPhoneNumber: "+1-555-0403",
              checkInDate: "2024-05-02",
              checkOutDate: "2024-05-04"
            }
          ]
        }
      ]
    };
  }
}
