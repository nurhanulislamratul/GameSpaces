import { Button } from "@/components/ui/button";
import { useGetSingleFacilityQuery } from "@/redux/features/facility/facilityApi";
import { TFacility } from "@/types/TFacility";
import { BookmarkPlus, Loader2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const FacilityDetails = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const { data, isFetching } = useGetSingleFacilityQuery(id);
  const facility = data?.data as TFacility;

  return (
    <div className="w-11/12 lg:w-10/12 max-w-screen-xl mx-auto">
      {isFetching ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-10 my-12">
          <div className="md:max-w-xs lg:max-w-sm xl:max-w-md">
            <img
              src={facility?.image}
              alt="product-image"
              className="rounded w-full"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {facility?.name}
            </h1>
            <h1 className="font-medium mb-2 flex items-center gap-2">
              <MapPin size={20} /> {facility?.location}
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold py-6">
              $ {facility?.pricePerHour}{" "}
              <span className="text-base">/ Hour</span>
            </h2>
            <p className="md:text-lg">
              <span className="font-bold">Description:</span>{" "}
              {facility?.description}
            </p>
            <Link to={`/booking/${id}`}>
              <Button className="md:text-base mt-6 flex items-center gap-1">
                <BookmarkPlus size={20} /> Book Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default FacilityDetails;
