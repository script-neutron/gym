import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="mx-auto min-h-screen bg-[#281619]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
