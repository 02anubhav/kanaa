import React from "react";
import { useLocation } from "react-router-dom";
import BannerMain from "./Banner/BannerMain";
import NavbarMain from "./Navbar/NavbarMain";
import Footer from "../components/Footer/Footer";
import Policy from "../components/Policy";

const Layout = ({ children }) => {
  const location = useLocation();

  const isProductDetail = location.pathname.startsWith("/product/");

  return (
    <>
      <BannerMain />
      <div className="max-w-6xl mx-auto">
        <NavbarMain />
      </div>

      <div className="max-w-6xl mx-auto min-h-screen">{children}</div>

      {isProductDetail && <Policy />}

      <Footer />
    </>
  );
};

export default Layout;
