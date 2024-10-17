import { selectCurrentUser } from "@/redux/features/auth/AuthSlice";
import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

type TPrivateRoutesProps = {
  children: ReactNode;
};

const PrivateRoutes = ({ children }: TPrivateRoutesProps) => {
  const user = useAppSelector(selectCurrentUser);
  const location = useLocation();

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoutes;
