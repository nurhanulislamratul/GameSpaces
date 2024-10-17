import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TFacility } from "@/types/TFacility";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const FacilityCard = ({ facility }: { facility: TFacility }) => {
  const { _id, name, image, description, location } = facility;
  return (
    <Card className="border-none shadow-sm">
      <CardHeader className="pb-3">
        <img
          src={image}
          alt="product-image"
          className="pb-2 object-cover w-full h-56 rounded-lg"
        />
        <CardTitle className="text-2xl font-bold text-zinc-900">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-zinc-700 font-medium">{description.split(".", 1)}.</p>
        <p className="flex items-center gap-1 font-medium text-slate-950 mt-4">
          <MapPin size={20} className="text-zinc-400" /> {location}
        </p>
      </CardContent>
      <CardFooter>
        <Link to={`/facilities/${_id}`} className="w-full">
          <Button variant={'default'} className="w-full text-base h-12">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FacilityCard;
