import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden">
      <ToastContainer />
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
