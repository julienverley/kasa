import React from "react";
import { apartments } from "../data/apartments";

const Slideshow = () => {
  return (
    <div className="location-pictures">
      <img
        className="location-pictures-img"
        src={apartments[0].pictures[0]}
        alt=""
      />
    </div>
  );
};

export default Slideshow;
