import React from "react";
import LogoImg from "../../public/logo.webp";

function Logo() {
  return (
    <div>
      <img src={LogoImg} alt="Logo" className="w-16 h-16 rounded" />
    </div>
  );
}

export default Logo;
