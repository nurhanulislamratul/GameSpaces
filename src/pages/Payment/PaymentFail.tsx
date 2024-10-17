import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PaymentFail = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  console.log(id);

  return (
    <div className="bg-slate-50 min-h-screen">
      <Container>
        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center gap-4 p-6 my-10 rounded-lg bg-white min-w-80">
            <div className="flex flex-col items-center gap-4">
              {/* check mark */}
              <div className="p-4 rounded-full bg-red-100 w-min">
                <div className="p-1 bg-red-600 rounded-full">
                  <X className="text-background font-bold" />
                </div>
              </div>
              <h3 className="text-xl font-bold">Payment Failed!</h3>
            </div>
            <Separator />
            <div className="mt-2">
              <Link to={"/facilities"}>
                <Button className="md:text-base">Try Again</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PaymentFail;
