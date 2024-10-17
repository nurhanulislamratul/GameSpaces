import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  BookCheck,
  MousePointerClick,
  UserPlus,
} from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorksSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <Container>
        <div>
          {/* section header */}
          <h1 className="text-slate-900 text-3xl md:text-4xl font-extrabold mb-4 text-center">
            How It Works
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-medium text-center">
            Simplifying the booking process for facilities.
          </p>
          {/* facilities container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <Card className="border shadow text-center group flex flex-col justify-between">
              <CardHeader className="pb-5 flex flex-col items-center">
                <span className="p-10 w-fit bg-stone-100 text-zinc-900 rounded-xl group-hover:bg-primary group-hover:text-white transition duration-500">
                  <UserPlus className="size-8" />
                </span>
                <CardTitle className="text-2xl font-extrabold text-zinc-900 pt-5">
                  Join Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 font-medium">
                  Quick and Easy Registration: Get started on our software
                  platform with a simple account creation process.
                </p>
              </CardContent>
              <CardFooter className="mt-2">
                <Link to={"/sign-up"} className="w-full">
                  <Button
                    variant={"outline"}
                    className="w-full text-base gap-2 h-12 border-primary text-primary group-hover:text-white group-hover:bg-primary transition duration-500"
                  >
                    Register Now <ArrowRight size={16} />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border shadow text-center group flex flex-col justify-between">
              <CardHeader className="pb-5 flex flex-col items-center">
                <span className="p-10 w-fit bg-stone-100 text-zinc-900 rounded-xl group-hover:bg-primary group-hover:text-white transition duration-500">
                  <MousePointerClick className="size-8" />
                </span>
                <CardTitle className="text-2xl font-extrabold text-zinc-900 pt-5">
                  Select Facility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 font-medium">
                  Select sport spaces and facilities that allign your need and
                  makes your sport experience awesome.
                </p>
              </CardContent>
              <CardFooter className="mt-2">
                <Link to={"/facilities"} className="w-full">
                  <Button
                    variant={"outline"}
                    className="w-full text-base gap-2 h-12 border-primary text-primary group-hover:text-white group-hover:bg-primary transition duration-500"
                  >
                    Go To Facilities <ArrowRight size={16} />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="border shadow text-center group flex flex-col justify-between">
              <CardHeader className="pb-5 flex flex-col items-center">
                <span className="p-10 w-fit bg-stone-100 text-zinc-900 rounded-xl group-hover:bg-primary group-hover:text-white transition duration-500">
                  <BookCheck className="size-8" />
                </span>
                <CardTitle className="text-2xl font-extrabold text-zinc-900 pt-5">
                  Booking Process
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 font-medium">
                  Easily book, pay, and enjoy a seamless experience on our
                  user-friendly platform.
                </p>
              </CardContent>
              <CardFooter className="mt-2">
                <Link to={"/facilities"} className="w-full">
                  <Button
                    variant={"outline"}
                    className="w-full text-base gap-2 h-12 border-primary text-primary group-hover:text-white group-hover:bg-primary transition duration-500"
                  >
                    Book Now <ArrowRight size={16} />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorksSection;
