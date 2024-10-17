import { selectCurrentUser } from "@/redux/features/auth/AuthSlice";
import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

type TProtectedRoutesProps = {
  children: ReactNode;
  role: string;
};

const ProtectedRoutes = ({ children, role }: TProtectedRoutesProps) => {
  const user = useAppSelector(selectCurrentUser);
  const location = useLocation();

  if (!user) {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }

  if (user?.role === role) {
    return children;
  }

  return (
    <Navigate
      state={location.pathname}
      to={`/unauthorized-access?role=${user?.role}`}
    ></Navigate>
  );
};

export default ProtectedRoutes;
