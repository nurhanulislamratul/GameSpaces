/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import Container from "@/components/shared/Container";
import { useGetAllFacilitiesQuery } from "@/redux/features/facility/facilityApi";
import { TFacility } from "@/types/TFacility";
import FacilityCard from "./FacilitiesUtils/FacilityCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { searchFacilities } from "@/utils/searchFacilities";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";

const Facilities = () => {
  const { data, isFetching } = useGetAllFacilitiesQuery(undefined);
  const facilities = data?.data?.filter(
    (item: TFacility) => item.isDeleted === false
  );

  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);
  const [page, setPage] = useState(1);
  const [limit] = useState(12);
  const [total, setTotal] = useState(facilities?.length);
  const [searchResult, setSearchResult] = useState<TFacility[]>(facilities);

  useEffect(() => {
    const result = searchFacilities(
      facilities,
      search,
      minPrice,
      maxPrice || Infinity,
      page,
      limit
    );
    setSearchResult(result.facilities);
    setTotal(result.total);
  }, [search, minPrice, maxPrice, page, isFetching]);

  const pages = Math.ceil(total / limit);

  return (
    <Container>
      <div>
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center py-6 mt-10 pb-10">
          Our Facilities
        </h1>

        {/* Search space */}
        <div className="flex justify-center items-center">
          <div
            tabIndex={0}
            className="flex w-full max-w-xl items-center space-x-2 p-1 border rounded-lg"
          >
            <Input
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="search"
              placeholder="Search here"
              className="border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-white text-base"
            />
            <Button type="submit">
              <Search />
            </Button>
          </div>
        </div>

        {/* price filtering */}
        <div className="flex items-center justify-end gap-4 py-6">
          <Label>Filter by:</Label>
          <Input
            onChange={(e) => {
              setMinPrice(Number(e.target.value));
            }}
            type="number"
            placeholder="Min Price"
            className="max-w-24 md:max-w-28"
          />
          <Input
            onChange={(e) => {
              setMaxPrice(Number(e.target.value));
            }}
            type="number"
            placeholder="Max Price"
            className="max-w-24 md:max-w-28"
          />
        </div>

        {/* facility listing */}
        <div className="pb-12">
          {isFetching ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6 justify-between items-center mb-16">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="space-y-4">
                  <Skeleton className="h-52 w-full rounded-xl" />
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-8/12" />
                    <Skeleton className="h-6 w-4/12" />
                    <Skeleton className="h-10 w-12/12" />
                  </div>
                </div>
              ))}
            </div>
          ) : searchResult?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
              {searchResult?.map((item: TFacility) => (
                <FacilityCard key={item._id} facility={item} />
              ))}
            </div>
          ) : (
            <h1 className="text-center text-lg text-gray-500 my-10">
              No Data Found
            </h1>
          )}
        </div>
        {/* pagination */}
        <section className="flex flex-col md:flex-row justify-center gap-8 items-center py-12">
          <Pagination className="">
            <PaginationContent className="flex-wrap">
              <PaginationItem>
                <Button
                  onClick={() => setPage(page - 1)}
                  className="cursor-pointer"
                  variant={"ghost"}
                  disabled={page <= 1}
                >
                  <ChevronLeft size={16} /> Previous
                </Button>
              </PaginationItem>
              {Array.from({ length: pages }).map((_: any, index: number) => (
                <PaginationItem key={index}>
                  <Button
                    onClick={() => {
                      setPage(index + 1);
                    }}
                    variant={page === index + 1 ? "default" : "ghost"}
                  >
                    {index + 1}
                  </Button>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <Button
                  onClick={() => setPage(page + 1)}
                  className="cursor-pointer"
                  variant={"ghost"}
                  disabled={page >= pages}
                >
                  Next <ChevronRight size={16} />
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>
      </div>
    </Container>
  );
};

export default Facilities;
