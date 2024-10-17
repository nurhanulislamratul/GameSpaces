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
import { useSignUpMutation } from "@/redux/features/auth/authApi";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

// form validation shema
const formValidationSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  phone: z.string().length(11, {
    message: "Phone number must be at least 11 digit.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  email: z.string().email().min(1, {
    message: "Email must be a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 character",
  }),
});

const AddAdmin = () => {
  const [addAdmin] = useSignUpMutation();

  // define form
  const form = useForm<z.infer<typeof formValidationSchema>>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      email: "",
      password: "",
    },
  });

  // define submit handler
  async function onSubmit(values: z.infer<typeof formValidationSchema>) {
    toast.loading("Adding...", { id: "add-admin" });
    try {
      const res = await addAdmin({
        ...values,
        role: "admin",
      });
      console.log(res);
      if (res?.data?.success) {
        toast.success("Successfully Added", { id: "add-admin" });
        form.reset();
      } else if (res?.error) {
        toast.error("User already exist", { id: "add-admin" });
      } else {
        toast.error("Something went wrong", { id: "add-admin" });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.message, { id: "add-admin" });
      console.log(error);
    }
  }

  return (
    <div>
      <Card className="grid flex-1 h-full shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Add New Admin</CardTitle>
          <CardDescription>
            Add a new admin and make your management more easiar.
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
                      <Input placeholder="Admin name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Admin phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Admin email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Admin password"
                        {...field}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="md:col-span-2">
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Admin address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-end md:col-span-2">
                <Button className="w-full md:w-auto md:text-base" type="submit">
                  Add Admin
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddAdmin;
