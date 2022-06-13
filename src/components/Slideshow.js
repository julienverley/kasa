import React from "react";
import { apartments } from "../data/apartments";

const Slideshow = () => {
  let urlID = window.location.search.split("=")[1];
  const location = apartments.find((apartment) => apartment.id === urlID);
  return (
    <div>
      <div className="location-pictures">
        <div className="slideshow-left-button-arrow">
          <svg
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="slideshow-right-button-arrow">
          <svg
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
              fill="white"
            />
          </svg>
        </div>
        <img
          className="location-pictures-img"
          src={location.cover}
          alt="location cover"
        />
      </div>
    </div>
  );
};

export default Slideshow;
