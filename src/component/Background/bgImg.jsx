import React from "react";
import bgImage from "./bg.jpeg";
import "./bg.css";

const BgImg = () => {
  return (
    <>
      <div className="bg_">
        <img src={bgImage} alt="background" className="background" />
      </div>
    </>
  );
};

export default BgImg;
