import { RoomingList } from "../services";

export interface BookingActions {
  onViewBookings: (eventName: string) => void;
  onViewDocument: (eventName: string) => void;
}

export interface ListBookingProps extends BookingActions {
  className?: string;
  data: RoomingList[];
  loading: boolean;
  error: string | null;
}
