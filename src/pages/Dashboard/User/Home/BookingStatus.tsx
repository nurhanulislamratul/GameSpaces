import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { selectCurrentUser } from "@/redux/features/auth/AuthSlice";
import { useGetBookingsByUserQuery } from "@/redux/features/booking/bookingApi";
import { useAppSelector } from "@/redux/hook";
import { TBooking } from "@/types/TBooking";
import { formatDate } from "@/utils/formatDate";
import getPreviousDate from "@/utils/getPreviousDate";
import { ClockArrowDown, ClockArrowUp, ShieldCheck } from "lucide-react";

const BookingStatus = () => {
  const user = useAppSelector(selectCurrentUser);
  const { data } = useGetBookingsByUserQuery(user?._id);
  const bookings = data?.data;

  // get todays bookings
  const date = new Date();
  const today = formatDate(date);
  const activeBookings = bookings?.filter(
    (item: TBooking) => item?.date === today
  );
  // get bookings from the last month
  const sevenDaysAgo = getPreviousDate(30);
  const recentBookings = bookings?.filter(
    (item: TBooking) => new Date(item?.date) > sevenDaysAgo
  );
  // get upcoming bookings
  const upcomingBookings = bookings?.filter(
    (item: TBooking) => new Date(item?.date) > date
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold">Active Bookings</CardTitle>
        </CardHeader>
        <CardContent className="">
          <div className="flex items-center gap-4">
            <div className="bg-primary text-white p-2 rounded-full">
              <ShieldCheck className="size-6 md:size-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold">
              {activeBookings?.length}
            </h1>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold">Recent Bookings</CardTitle>
        </CardHeader>
        <CardContent className="">
          <div className="flex items-center gap-4">
            <div className="bg-primary text-white p-2 rounded-full">
              <ClockArrowUp className="size-6 md:size-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold">
              {recentBookings?.length}
            </h1>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-bold">Upcoming Bookings</CardTitle>
        </CardHeader>
        <CardContent className="">
          <div className="flex items-center gap-4">
            <div className="bg-primary text-white p-2 rounded-full">
              <ClockArrowDown className="size-6 md:size-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold">
              {upcomingBookings?.length}
            </h1>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingStatus;
