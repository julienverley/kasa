import React from "react";

const Banner = (props) => {
  return (
    <div className="banner">
      <img src={props.imageBg} alt="banner background" />
      <h1>{props.title}</h1>
      <br />
    </div>
  );
};

export default Banner;
