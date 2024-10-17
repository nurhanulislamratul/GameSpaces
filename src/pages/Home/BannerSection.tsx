import banner_img from "@/assets/images/pngimg.com - football_player_PNG9.png";
import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { MousePointer } from "lucide-react";

const BannerSection = () => {
  return (
    <div className="py-8 pb-10">
      <Container>
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
          <div className="md:w-5/12">
            <img src={banner_img} alt="banner image" className="w-full" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-fuchsia-500">
              Unlock Your Game
            </h1>
            <h2 className="text-4xl lg:text-6xl font-extrabold leading-none text-slate-900">
              Reserve Sports Facilities with Ease!
            </h2>
            <p className="lg:text-lg font-medium my-2 text-zinc-700">
              Book your ideal sports facilities online with ease! From courts to
              fields, find and reserve the perfect space for your next game or
              event today!
            </p>
            <Button className="md:text-base mt-4 px-6 h-12 gap-2 rounded-full">
              Book Now <MousePointer className="rotate-12 size-5" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BannerSection;
