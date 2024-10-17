/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Container from "@/components/shared/Container";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useSignUpMutation } from "@/redux/features/auth/authApi";

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

const SignUp = () => {
  const [signUp] = useSignUpMutation();
  const navigate = useNavigate();

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

  // submit sign up handler
  async function handleSignUp(values: z.infer<typeof formValidationSchema>) {
    toast.loading("Account creating...", { id: "sign-up" });

    // user data for sending to server
    const userData = {
      name: values?.name,
      phone: values?.phone,
      address: values?.address,
      email: values?.email,
      password: values?.password,
      role: "user",
    };

    try {
      const res = await signUp(userData).unwrap();
      if (res.success) {
        toast.success("Sign up successful", { id: "sign-up" });
        form.reset();
        navigate("/login");
      }
    } catch (error: any) {
      toast.error(error?.data?.message, { id: "sign-up" });
      console.log(error);
    }
  }

  return (
    <div className="py-12 bg-[url('https://png.pngtree.com/thumb_back/fw800/background/20230901/pngtree-a-group-of-sports-equipment-on-a-surface-image_13169788.jpg')] bg-fixed">
      <Container>
        <div className="flex w-full justify-center lg:justify-end items-center gap-10">
          {/* Sign Up form */}
          <div className="border rounded-2xl bg-white p-4 md:p-8 w-full md:w-1/2 lg:w-2/5">
            <CardTitle className="mb-8 font-bold text-2xl md:text-3xl text-center">
              Sign Up
            </CardTitle>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSignUp)}
                className="space-y-4 px-1"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
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
                        <Input
                          placeholder="Your phone"
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
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Your address" {...field} />
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
                        <Input
                          placeholder="Email address"
                          {...field}
                          type="email"
                        />
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
                          placeholder="Enter password"
                          {...field}
                          type="password"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="w-full md:text-base py-5">Sign Up</Button>

                <p className="text-sm text-center pt-4">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="font-bold text-primary hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
