import React from "react";
import seekoutLogo from "../assets/seekout.svg";

const SeekoutLogo = () => {
  return (
    <div className="w-1/2 mx-auto">
      <img src={seekoutLogo} alt="Seekout Logo" className="w-full h-full" />
    </div>
  );
};

export default SeekoutLogo;
