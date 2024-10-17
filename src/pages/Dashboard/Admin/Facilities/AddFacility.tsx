import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateFacilityMutation } from "@/redux/features/facility/facilityApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// form schema
const formSchema = z.object({
  name: z.string().min(5, {
    message: "Name must be at least 5 characters",
  }),
  description: z.string().min(8, {
    message: "Description must be at least 8 words",
  }),
  image: z.string().min(1, {
    message: "Image must be a valid url",
  }),
  location: z.string().min(5, {
    message: "Location must be a at least 5 character",
  }),
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
    ),
});

const AddFacility = () => {
  const [addFacility] = useCreateFacilityMutation();

  // define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      image: "",
      location: "",
      pricePerHour: "",
    },
  });

  // define submit handler
  async function onSubmit(values: z.infer<typeof formSchema>) {
    toast.loading("Creating...", { id: "add" });
    try {
      const { data } = await addFacility({
        ...values,
        pricePerHour: Number(values?.pricePerHour),
      });

      if (data?.success) {
        toast.success("Successfully Created", { id: "add" });
        form.reset();
      } else {
        toast.error("Something went wrong", { id: "add" });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message, { id: "add" });
      console.log(error);
    }
  }

  return (
    <div>
      <Card className="grid flex-1 h-full shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Add New Facility</CardTitle>
          <CardDescription>
            Add a new facility and start selling your facility.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
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
              <div className="md:col-span-2">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Facility description"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end md:col-span-2">
                <Button className="w-full md:w-auto md:text-base" type="submit">
                  Add Facility
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddFacility;
