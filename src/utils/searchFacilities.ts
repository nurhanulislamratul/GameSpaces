import { TFacility } from "@/types/TFacility";

// search facilities function with price range filter
export const searchFacilities = (
  facilities: TFacility[],
  query: string,
  minPrice: number = 0,
  maxPrice: number = Infinity || Infinity,
  page: number = 1,
  limit: number = 12
): { facilities: TFacility[]; total: number } => {
  // Normalize the search query
  const normalCaseQuery = query.toLowerCase();

  // Filter facilities
  const filteredFacilities = facilities?.filter(
    (facility) =>
      facility.isDeleted === false &&
      (facility.name.toLowerCase().includes(normalCaseQuery) ||
        facility.location.toLowerCase().includes(normalCaseQuery)) &&
      facility.pricePerHour >= minPrice &&
      facility.pricePerHour <= maxPrice
  );

  // total number of facilities after filtering
  const total = filteredFacilities?.length;

  // pagination
  const startIndex = (page - 1) * limit;
  const paginatedFacilities = filteredFacilities?.slice(
    startIndex,
    startIndex + limit
  );

  return { facilities: paginatedFacilities, total };
};
