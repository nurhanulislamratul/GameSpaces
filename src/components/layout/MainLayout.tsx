import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../shared/ScrollToTop";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
