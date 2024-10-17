import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllBookingsQuery } from "@/redux/features/booking/bookingApi";

import { TBooking } from "@/types/TBooking";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { MoreHorizontal } from "lucide-react";

import { Link } from "react-router-dom";
import DetailsDialog from "./DetailsDialog";
import { roundNumber } from "@/utils/roundNumber";

const AdminBookings = () => {
  // get bookings data
  const { data, isFetching } = useGetAllBookingsQuery(undefined);
  const bookings = data?.data;

  return (
    <div className="flex flex-1 flex-col gap-4 lg:gap-6">
      <main className="grid flex-1 items-start gap-4 sm:py-0 md:gap-8">
        <Card className="grid flex-1 h-full shadow-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Bookings</CardTitle>
            <CardDescription>
              Manage bookings and view their time slots.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="hidden w-[100px] md:table-cell">
                    <span className="sr-only">Image</span>
                  </TableHead>
                  <TableHead>Facility</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Customer
                  </TableHead>
                  <TableHead className="hidden md:table-cell">Amount</TableHead>
                  <TableHead className="hidden md:table-cell">
                    Payment
                  </TableHead>
                  <TableHead className="hidden md:table-cell">
                    Booking Date
                  </TableHead>
                  <TableHead>
                    <span className="sr-only">Actions</span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* show skeleton when fetching */}
                {isFetching
                  ? Array.from({ length: 5 })?.map((_, index) => (
                      <TableRow key={index}>
                        <TableCell className="hidden sm:table-cell">
                          <Skeleton className="w-full h-16" />
                        </TableCell>
                        <TableCell className="font-medium">
                          <Skeleton className="w-full h-5" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="w-full h-5" />
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Skeleton className="w-full h-5" />
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Skeleton className="w-full h-5" />
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Skeleton className="w-full h-5" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="w-full h-5" />
                        </TableCell>
                      </TableRow>
                    ))
                  : // display date when fetching completed
                    bookings?.map((item: TBooking, index: number) => (
                      <TableRow key={index}>
                        <TableCell className="hidden md:table-cell">
                          <Link to={`/facilities/${item?.facility?._id}`}>
                            <img
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                              height="64"
                              src={item?.facility?.image}
                              width="64"
                            />
                          </Link>
                        </TableCell>
                        <TableCell className="font-medium">
                          <Link
                            to={`/facilities/${item?.facility?._id}`}
                            className="hover:text-primary"
                          >
                            {item?.facility?.name}
                          </Link>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className={`${
                              item?.isBooked === "canceled" && "text-red-500"
                            }`}
                          >
                            {capitalizeFirstLetter(item?.isBooked)}
                          </Badge>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {item?.user?.name}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          $ {roundNumber(item?.payableAmount)}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {capitalizeFirstLetter(item?.paymentStatus)}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">
                          {item?.date}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                              align="end"
                              className="space-y-1"
                            >
                              {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
                              {/* view details */}
                              <DetailsDialog booking={item} />
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
              </TableBody>
              {bookings?.length < 1 && (
                <TableCaption>
                  {/* show no data found message if bookings is empty */}
                  <div className="text-center w-full mt-14">
                    <h3 className="text-2xl font-bold tracking-tight">
                      You have no bookings
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      You can start enjoying as soon as you book a facility.
                    </p>
                    <Link to={"/facilities"}>
                      <Button className="mt-4">Book Now</Button>
                    </Link>
                  </div>
                </TableCaption>
              )}
            </Table>
          </CardContent>
          {/* showing range of pagination */}
          {bookings?.length > 0 && (
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-{bookings?.length}</strong> of{" "}
                <strong>{bookings?.length}</strong> bookings
              </div>
            </CardFooter>
          )}
        </Card>
      </main>
    </div>
  );
};

export default AdminBookings;
