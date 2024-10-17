import Container from "@/components/shared/Container";
import { useGetAllFacilitiesQuery } from "@/redux/features/facility/facilityApi";
import { TFacility } from "@/types/TFacility";
import FacilityCard from "./FacilityCard";

const FeaturedFacilities = () => {
  const { data } = useGetAllFacilitiesQuery(undefined);
  const facilities = data?.data?.slice(11, 14);

  return (
    <div className="py-16 lg:py-24 bg-slate-50">
      <Container>
        <div>
          {/* section header */}
          <h1 className="text-slate-900 text-3xl md:text-4xl font-extrabold mb-4 text-center">
            Featured Facilities
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-medium text-center">
            Elevate your game in our cutting-edge facilities.
          </p>
          {/* facilities container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {facilities?.map((item: TFacility) => (
              <FacilityCard key={item?._id} facility={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedFacilities;
