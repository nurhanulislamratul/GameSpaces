import { TUser } from "./TAuth";
import { TFacility } from "./TFacility";

export type TBooking = {
  _id: string;
  user: TUser;
  date: string;
  facility: TFacility;
  startTime: string;
  endTime: string;
  payableAmount: number;
  paymentStatus: string;
  isBooked: string;
  trxID: string;
  status?: "On going" | "Passed" | "Upcoming";
};
