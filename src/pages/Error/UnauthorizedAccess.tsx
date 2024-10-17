import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";
import { Link } from "react-router-dom";

const UnauthorizedAccess = () => {
  return (
    <div className="text-center h-96 flex flex-col items-center justify-center">
      <div className="space-y-2">
        <span className="flex justify-center mb-4">
          <Frown className="size-20 text-slate-500" />
        </span>
        <h1 className="text-2xl md:text-3xl font-bold">
          You are not authorized
        </h1>
        <p className="text-xl font-bold pb-6">To access this route</p>
        <Link to={"/"}>
          <Button className="md:text-base">Go Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default UnauthorizedAccess;
