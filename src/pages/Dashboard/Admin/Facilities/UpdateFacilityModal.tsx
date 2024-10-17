/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { useUpdateFacilityMutation } from "@/redux/features/facility/facilityApi";
import { TFacility } from "@/types/TFacility";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// form schema
const formSchema = z.object({
  name: z
    .string()
    .min(5, {
      message: "Name must be at least 5 characters",
    })
    .optional(),
  description: z
    .string()
    .min(8, {
      message: "Description must be at least 8 words",
    })
    .optional(),
  image: z
    .string()
    .min(1, {
      message: "Image must be a valid url",
    })
    .optional(),
  location: z
    .string()
    .min(5, {
      message: "Location must be a at least 5 character",
    })
    .optional(),
  pricePerHour: z
    .string()
    .min(1, {
      message: "Price must be a positive number",
    })
    .refine(
      (value) => {
        const numberValue = parseFloat(value);
        return !isNaN(numberValue) && numberValue > 0;
      },
      {
        message: "Price must be a positive number",
      }
    )
    .optional(),
});

const UpdateFacilityModal = ({ facility }: { facility: TFacility }) => {
  const [updateFacility] = useUpdateFacilityMutation();

  // define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: facility?.name,
      description: facility?.description,
      image: facility?.image,
      location: facility?.location,
      pricePerHour: String(facility?.pricePerHour),
    },
  });

  // define submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.loading("Updating...", { id: "update" });
    try {
      const { data } = await updateFacility({
        payload: { values, pricePerHour: Number(values?.pricePerHour) },
        id: facility?._id,
      });

      if (data?.success) {
        toast.success("Successfully Updated", { id: "update" });
        form.reset();
      } else {
        toast.error("Something went wrong", { id: "update" });
      }
    } catch (error: any) {
      toast.error(error?.data?.message, { id: "update" });
      console.log(error);
    }
  }

  return (
    <Dialog>
      <DialogTrigger className="text-sm p-2 hover:bg-muted rounded w-full text-left">
        Edit
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center mb-4">
            Booking Details
          </DialogTitle>
          <ScrollArea className="grid gap-4 py-4 h-96 px-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 px-1"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Facility name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="Facility location" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="pricePerHour"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price Per Hour</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Facility price"
                          {...field}
                          type="number"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Facility description"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Image</FormLabel>
                      <FormControl>
                        <Input placeholder="Image URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter className="md:justify-end gap-y-2">
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Close
                    </Button>
                  </DialogClose>
                  <Button>Update Facility</Button>
                </DialogFooter>
              </form>
            </Form>
          </ScrollArea>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateFacilityModal;
