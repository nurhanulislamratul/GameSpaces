import Container from "@/components/shared/Container";
import PoiMarkers from "@/components/shared/PoiMarkers";
import { Button } from "@/components/ui/button";
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
import { zodResolver } from "@hookform/resolvers/zod";
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from "@vis.gl/react-google-maps";
import { Building2, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// form validation shema
const formValidationSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z.string().email().min(1, {
    message: "Email must be a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

// office location for google maps
type Poi = { key: string; location: google.maps.LatLngLiteral };
const locations: Poi[] = [
  { key: "operaHouse", location: { lat: 40.712776, lng: -74.005974 } },
];

const ContactUs = () => {
  // define form
  const form = useForm<z.infer<typeof formValidationSchema>>({
    resolver: zodResolver(formValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // define submit handler
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async function onSubmit(_values: z.infer<typeof formValidationSchema>) {
    // toast.loading("Adding...", { id: "add-admin" });
    // try {
    //     const res = await
    //     console.log(res);
    //     if (res?.data?.success) {
    //       toast.success("Successfully Added", { id: "add-admin" });
    //       form.reset();
    //     } else if (res?.error) {
    //       toast.error("User already exist", { id: "add-admin" });
    //     } else {
    //       toast.error("Something went wrong", { id: "add-admin" });
    //     }
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    // } catch (error: any) {
    //   toast.error(error?.message, { id: "add-admin" });
    //   console.log(error);
    // }
  }

  return (
    <div className="py-8 md:py-12">
      <Container>
        {/* form section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
          {/* background image */}
          <div className="">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/971/967/737/sports-images-for-desktop-background-wallpaper-preview.jpg"
              alt="sport image"
              className="rounded-lg h-full object-cover"
            />
          </div>
          {/* contact form */}
          <div>
            <div className="space-y-2 mb-6">
              <h1 className="text-2xl md:text-3xl font-extrabold">
                Let's Get In Touch.
              </h1>
              <p className="font-medium">
                Or just reach out manually to{" "}
                <span className="text-primary">hello@gamespaces.com</span>
              </p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-gray-700">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
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
                      <FormLabel className="font-bold text-gray-700">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-gray-700">
                        Subject
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Write subject" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold text-gray-700">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write message"
                          {...field}
                          rows={5}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end md:col-span-2">
                  <Button className="w-full md:text-base" type="submit">
                    Submit
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
        {/* contact information section */}
        <div className="pt-14 md:pt-20 grid gap-10">
          <div className="font-medium space-y-3">
            <span className="text-sm font-semibold border rounded-full px-3 py-1">
              Reach Out To Us
            </span>
            <h1 className="text-2xl md:text-3xl font-extrabold pt-2">
              We'd Love To Hear From You
            </h1>
            <p className="font-medium">
              Or just reach out manually to{" "}
              <span className="text-primary">hello@gamespaces.com</span>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4">
              <span className="inline-flex p-2 mb-3 bg-indigo-50 rounded-full text-primary">
                <Mail size={20} />
              </span>
              <h3 className="text-lg font-bold">Email Support</h3>
              <p className="text-sm">Our team can respond in real time.</p>
              <p className="mt-3 text-primary font-bold">
                hello@gamespaces.com
              </p>
            </div>
            <div className="p-4">
              <span className="inline-flex p-2 mb-3 bg-indigo-50 rounded-full text-primary">
                <Building2 size={20} />
              </span>
              <h3 className="text-lg font-bold">Visit Our Office</h3>
              <p className="text-sm">Visit our office in real life.</p>
              <p className="mt-3 text-primary font-bold">
                22/c Elementary Avenue, NY
              </p>
            </div>
            <div className="p-4">
              <span className="inline-flex p-2 mb-3 bg-indigo-50 rounded-full text-primary">
                <Phone size={20} />
              </span>
              <h3 className="text-lg font-bold">Call Us Directly</h3>
              <p className="text-sm">Available during working hours.</p>
              <p className="mt-3 text-primary font-bold">(+1)234-4567-789</p>
            </div>
          </div>
        </div>
        {/* map section */}
        <div className="grid md:grid-cols-2 gap-y-10 lg:gap-20 py-12">
          <div className="flex flex-col justify-center">
            <div className="space-y-4">
              <span className="text-sm font-semibold border rounded-full px-3 py-1">
                Visit Our Office
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold pt-2">
                Our Location
              </h1>
              <div className="space-y-2">
                <p className="font-medium">22/c Elementary Avenue</p>
                <p className="font-medium">
                  New York City, United States of America
                </p>
              </div>
            </div>
          </div>
          <div className="min-h-96">
            <APIProvider
              apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY as string}
              onLoad={() => console.log("Maps API has loaded.")}
            >
              <Map
                mapId="DEMO_MAP_ID"
                defaultZoom={13}
                defaultCenter={{ lat: 40.712776, lng: -74.005974 }}
                onCameraChanged={(ev: MapCameraChangedEvent) =>
                  console.log(
                    "camera changed:",
                    ev.detail.center,
                    "zoom:",
                    ev.detail.zoom
                  )
                }
              >
                <PoiMarkers pois={locations} />
              </Map>
            </APIProvider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactUs;
