import DashboardLayout from "@/components/layout/DashboardLayout";
import MainLayout from "@/components/layout/MainLayout";
import AboutUs from "@/pages/AboutUs/AboutUs";
import Booking from "@/pages/Booking/Booking";
import ContactUs from "@/pages/ContactUs/ContactUs";
import AddAdmin from "@/pages/Dashboard/Admin/Admins/AddAdmin";
import AdminBookings from "@/pages/Dashboard/Admin/Bookings/AdminBookings";
import AddFacility from "@/pages/Dashboard/Admin/Facilities/AddFacility";
import AdminFacilities from "@/pages/Dashboard/Admin/Facilities/Facilities";
import Dashboard from "@/pages/Dashboard/Shared/Dashboard";
import UserBookings from "@/pages/Dashboard/User/Bookings/UserBookings";
import Facilities from "@/pages/Facilities/Facilities";
import FacilityDetails from "@/pages/FacilityDetails/FacilityDetails";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import PaymentFail from "@/pages/Payment/PaymentFail";
import PaymentSuccess from "@/pages/Payment/PaymentSuccess";
import SignUp from "@/pages/SignUp/SignUp";
import { createBrowserRouter } from "react-router-dom";
import Error404Page from "@/pages/Error/Error404Page";
import UnauthorizedAccess from "@/pages/Error/UnauthorizedAccess";
import ProtectedRoutes from "./ProtectedRoutes";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404Page />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/facilities",
        element: <Facilities />,
      },
      {
        path: "/facilities/:id",
        element: <FacilityDetails />,
      },
      {
        path: "/booking/:id",
        element: (
          <ProtectedRoutes role="user">
            <Booking />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/payment/success/:id",
        element: (
          <ProtectedRoutes role="user">
            <PaymentSuccess />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/payment/fail/:id",
        element: (
          <ProtectedRoutes role="user">
            <PaymentFail />
          </ProtectedRoutes>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/unauthorized-access",
        element: <UnauthorizedAccess />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      {
        path: "index",
        element: <Dashboard />,
      },
      {
        path: "my-bookings",
        element: (
          <ProtectedRoutes role="user">
            <UserBookings />
          </ProtectedRoutes>
        ),
      },
      {
        path: "bookings",
        element: (
          <ProtectedRoutes role="admin">
            <AdminBookings />
          </ProtectedRoutes>
        ),
      },
      {
        path: "facilities",
        element: (
          <ProtectedRoutes role="admin">
            <AdminFacilities />
          </ProtectedRoutes>
        ),
      },
      {
        path: "add-facility",
        element: (
          <ProtectedRoutes role="admin">
            <AddFacility />
          </ProtectedRoutes>
        ),
      },
      {
        path: "add-admin",
        element: (
          <ProtectedRoutes role="admin">
            <AddAdmin />
          </ProtectedRoutes>
        ),
      },
    ],
  },
]);

export default router;
