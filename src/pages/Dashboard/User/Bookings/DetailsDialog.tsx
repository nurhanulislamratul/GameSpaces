import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { TBooking } from "@/types/TBooking";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";

const DetailsDialog = ({ booking }: { booking: TBooking }) => {
  return (
    <Dialog>
      <DialogTrigger className="text-sm p-2 hover:bg-muted rounded w-full text-left">
        View details
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center mb-4">
            Booking Details
          </DialogTitle>
          <ScrollArea>
            <Table>
              {booking?._id ? (
                <TableBody>
                  <TableRow>
                    <TableCell>Facility Name</TableCell>
                    <TableCell>{booking?.facility?.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>{booking?.date}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Start Time</TableCell>
                    <TableCell>{booking?.startTime}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>End Time</TableCell>
                    <TableCell>{booking?.endTime}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Location</TableCell>
                    <TableCell>{booking?.facility?.location}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Status</TableCell>
                    <TableCell>
                      {capitalizeFirstLetter(booking?.isBooked)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Paid Amount</TableCell>
                    <TableCell>
                      $ {Math.round(booking?.payableAmount * 100) / 100}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Payment Status</TableCell>
                    <TableCell>
                      {capitalizeFirstLetter(booking?.paymentStatus)}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Transaction ID</TableCell>
                    <TableCell>{booking?.trxID}</TableCell>
                  </TableRow>
                </TableBody>
              ) : (
                // display No data found if there is no data
                <TableCaption>No Data Found</TableCaption>
              )}
            </Table>
          </ScrollArea>
          <div className="flex justify-center pt-3">
            <DialogClose className="text-sm bg-muted p-2 px-4 rounded-lg hover:bg-primary-foreground">
              Close
            </DialogClose>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DetailsDialog;
