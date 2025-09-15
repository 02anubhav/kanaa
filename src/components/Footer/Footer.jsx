import React from "react";
import useIsMobile from "../../hooks/useIsMobile";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

export default function Footer() {
  const isMobile = useIsMobile(768); 

  return <>{isMobile ? <MobileFooter /> : <DesktopFooter />}</>;
}
