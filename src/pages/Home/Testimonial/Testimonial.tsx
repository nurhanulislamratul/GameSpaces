import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/shared/Container";
import { useEffect, useState } from "react";
import testimonialsData from "@/assets/data/testimonials.json";
import { Quote } from "lucide-react";

type TTestomonial = {
  name: string;
  profession: string;
  image: string;
  message: string;
};

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState<TTestomonial[]>([]);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);
  console.log(testimonials);

  return (
    <div className="py-16 lg:py-24 bg-slate-50">
      <Container>
        {/* section header */}
        <h1 className="text-slate-900 text-3xl md:text-4xl font-extrabold mb-4 text-center">
          What Clients Say
        </h1>
        <p className="text-slate-600 text-lg md:text-xl font-medium text-center pb-12">
          What our customers say about us and words from our community
        </p>
        {/* slider section */}
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full px-10"
        >
          <CarouselContent>
            {testimonials.map((item: TTestomonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="border-none shadow-sm flex flex-col justify-between">
                    <CardHeader className="pb-3 flex flex-col items-center text-center space-y-0">
                      <img
                        src={item?.image}
                        alt="product-image"
                        className="size-24 rounded-full object-cover border-2 border-primary p-0.5"
                      />
                      <CardTitle className="text-xl font-bold text-zinc-900 pt-4">
                        {item?.name}
                      </CardTitle>
                      <p className="text-zinc-900 font-semibold mt-0">
                        {item?.profession}
                      </p>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="flex justify-center text-primary pb-2">
                        <Quote size={20} />
                      </p>
                      <p className="text-zinc-700">"{item?.message}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </Container>
    </div>
  );
};

export default Testimonial;
