import React from "react";
import umbrella from "../../../assets/umbrella.png";
import { useLogoController } from "./logo.controller";
const Logo = () => {
  const { handleClick } = useLogoController();
  return (
    <div className="flex-1 ml-4 sm:ml-0 ">
      <img
        onClick={handleClick}
        src={umbrella}
        alt=""
        height={40}
        width={40}
        className=""
      />
    </div>
  );
};

export default Logo;
