import React, { useState } from "react";
import Logo from "./Logo";
import LogoFooter from "./LogoFooter";

const Footer = () => {
  const [droits, setDroits] = useState("2020 Kasa. All right reserved");
  return (
    <div className="footer">
      <div className="logo-footer">
        <LogoFooter />
      </div>
      <div className="droits">{droits}</div>
    </div>
  );
};

export default Footer;
