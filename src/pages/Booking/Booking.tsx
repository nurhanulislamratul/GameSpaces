/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/shared/Container";
import { DatePicker } from "@/components/shared/DatePicker";
import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useCreateBookingMutation } from "@/redux/features/booking/bookingApi";
import { useCheckAvailabilityQuery } from "@/redux/features/checkAvailability/checkAvailablityApi";
import { useGetSingleFacilityQuery } from "@/redux/features/facility/facilityApi";
import { TFacility } from "@/types/TFacility";
import { TSlot } from "@/types/TSlot";
import { formatDate } from "@/utils/formatDate";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircleIcon, MapPin } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

// form validation shema
const formValidationSchema = z.object({
  date: z.string().min(1, {
    message: "Date must be a valid date",
  }),
  startTime: z.string().min(1, {
    message: "Start time must be a valid time",
  }),
  endTime: z.string().min(1, {
    message: "End time must be a valid time",
  }),
});

const Booking = () => {
  const [createBooking] = useCreateBookingMutation();

  // get the facility id from location
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  // retrieve facility data
  const { data, isFetching } = useGetSingleFacilityQuery(id);
  const facility = data?.data as TFacility;

  // get picked date and format that date
  const [date, setDate] = useState<Date>();
  const formatedDate = formatDate(date || new Date());

  // retrieve available time slots
  const { data: availableSlots, isFetching: isSlotFetching } =
    useCheckAvailabilityQuery({
      id,
      date: formatedDate,
    });

  // define form
  const form = useForm<z.infer<typeof formValidationSchema>>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      date: formatedDate,
      startTime: "",
      endTime: "",
    },
  });

  const handlePlaceBooking = async (
    values: z.infer<typeof formValidationSchema>
  ) => {
    toast.loading("Booking...", { id: "booking" });

    const bookingData = { ...values, date: formatedDate, facility: id };
    try {
      const res = await createBooking(bookingData).unwrap();
      console.log(res);
      if (res.success) {
        toast.success("Waiting for payment", { id: "booking" });
        form.reset();
        window.location.replace(res.data.url);
      }
    } catch (error: any) {
      toast.error(error?.data?.message, { id: "booking" });
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-50">
      <Container>
        <div className="inline-flex flex-wrap w-full justify-between gap-10 py-12">
          {/* left section */}
          <div className="w-full md:w-7/12">
            {/* Facility key details */}
            {isFetching ? (
              <div className="flex gap-6 bg-white rounded-2xl p-6">
                <Skeleton className="w-full md:size-36 rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="w-96 h-10" />
                  <Skeleton className="w-72 h-7" />
                  <Skeleton className="w-48 h-8" />
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row gap-6 bg-white rounded-2xl p-6">
                <img
                  src={facility?.image}
                  alt="facility image"
                  className="w-full md:size-36 object-cover rounded-xl"
                />
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold">{facility?.name}</h1>
                  <p className="font-medium flex items-center gap-2">
                    <MapPin size={20} /> {facility?.location}
                  </p>
                  <p className="text-xl md:text-2xl font-semibold">
                    $ {facility?.pricePerHour}{" "}
                    <span className="text-base">/ hour</span>
                  </p>
                </div>
              </div>
            )}
            {/* check availability */}
            <div className="bg-white rounded-2xl p-6 mt-6">
              <h1 className="text-lg font-semibold mb-4">Check Availability</h1>
              <div className="flex flex-wrap gap-6">
                <div className="flex-1">
                  <DatePicker date={date} setDate={setDate} />
                </div>
                <Button className="md:text-base md:py-6 flex-1">
                  {isSlotFetching ? (
                    <LoaderCircleIcon className="animate-spin" />
                  ) : (
                    "Check Availability"
                  )}
                </Button>
              </div>
            </div>

            {/* available slots */}
            <div className="bg-white rounded-2xl p-6 mt-6">
              <h1 className="text-lg font-semibold mb-4">Available Slots</h1>
              {availableSlots?.data?.length < 1 && (
                <div className="text-center text-gray-400">
                  No slot is available
                </div>
              )}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {isSlotFetching
                  ? Array.from({ length: 3 }).map((_, index) => (
                      <Skeleton key={index} className="h-10" />
                    ))
                  : availableSlots?.data?.map((item: TSlot, index: number) => (
                      <Button
                        variant={"secondary"}
                        key={index}
                        className="md:text-base"
                      >
                        {item.startTime} - {item.endTime}
                      </Button>
                    ))}
              </div>
            </div>
          </div>

          {/* booking details */}
          <div className="p-8 border rounded-2xl flex-1 bg-white">
            <CardTitle className="mb-8 text-lg font-semibold text-center">
              Booking Details
            </CardTitle>
            <Form {...form}>
              <form className="space-y-8 px-1">
                <FormField
                  control={form.control}
                  name="date"
                  render={() => (
                    <FormItem>
                      <FormLabel>Date</FormLabel>
                      <FormControl>
                        <DatePicker date={date} setDate={setDate} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="startTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Time</FormLabel>
                      <FormControl>
                        <Input
                          className="md:py-6"
                          placeholder="Enter start time"
                          {...field}
                          type="time"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Time</FormLabel>
                      <FormControl>
                        <Input
                          className="md:py-6"
                          placeholder="Enter end time"
                          {...field}
                          type="time"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
              <div className="mt-8">
                <Button
                  className="w-full text-base py-6"
                  onClick={form.handleSubmit(handlePlaceBooking)}
                >
                  CHECKOUT
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Booking;
