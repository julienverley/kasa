import React, { useState } from "react";
import { apartments } from "../data/apartments";

const Slideshow = ({ id }) => {
  const location = apartments.find((apartment) => apartment.id === id);
  const pictures = location.pictures;
  const [actualPictureIndex, setActualPictureIndex] = useState(0);

  const nextPicture = () => {
    if (actualPictureIndex >= pictures.length - 1) {
      setActualPictureIndex(0);
    } else {
      setActualPictureIndex(actualPictureIndex + 1);
    }
  };
  const previousPicture = () => {
    if (actualPictureIndex === pictures.length - pictures.length) {
      setActualPictureIndex(pictures.length - 1);
    } else {
      setActualPictureIndex(actualPictureIndex - 1);
    }
  };

  return (
    <div>
      <div className="slideshow-pictures">
        <img
          className="slideshow-pictures-img"
          src={pictures[actualPictureIndex]}
          alt="location cover"
        />
        <div>
          <div className="slideshow-counter">
            {actualPictureIndex + 1}/{pictures.length}
          </div>
        </div>
        <div
          className={
            pictures.length > 1
              ? "slideshow-left-button-arrow"
              : "slideshow-left-button-arrow-display-none"
          }
          onClick={previousPicture}
        >
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
        <div
          className={
            pictures.length > 1
              ? "slideshow-right-button-arrow"
              : "slideshow-right-button-arrow-display-none"
          }
          onClick={nextPicture}
        >
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
      </div>
    </div>
  );
};

export default Slideshow;
