import React from "react";

const Banner = ({ imageBackground, title }) => {
  return (
    <div className="banner">
      <img src={imageBackground} alt="banner background" />
      <h1>{title}</h1>
      <br />
    </div>
  );
};

export default Banner;
