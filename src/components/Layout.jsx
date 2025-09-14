import React from "react";
import BannerMain from "./Banner/BannerMain";
import NavbarMain from "./Navbar/NavbarMain";

const Layout = ({ children }) => {
  return (
    <>
      <BannerMain />
      <div className="max-w-6xl mx-auto">
        <NavbarMain />
      </div>
      <div className="max-w-6xl mx-auto min-h-screen">{children}</div>
    </>
  );
};

export default Layout;
