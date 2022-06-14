import React from "react";

const Banner = (props) => {
  // console.log(props);
  return (
    <div className="banner">
      {/* <div>{props.image}</div> */}
      <img src={props.imageBg} alt="banner background" />
      <h1>{props.title}</h1>
      <br />
    </div>
  );
};

export default Banner;
