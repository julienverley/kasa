import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import { apartments } from "../data/apartments";
import LogoFooter from "./LogoFooter";

// id vient directement des props
const Slideshow = (props) => {
  const location = apartments.find((apartment) => apartment.id === props.id);

  const pictures = location.pictures;
  const [actualPictureIndex, setActualPictureIndex] = useState(0);

  // 1/ Retrouver l'index de la photo affichée // jouer avec l'index
  // 2/ Mettre à jour l'état, actualPicture avec +1
  // 3/ Quand index.lenght(fin), mettre à jour l'état avec la position 0
  // 4/ Onclick dans le SVG
  const nextPicture = () => {
    //pictures.find((picture) => picture === actualPicture);
    // pictures.find((picture, index) => picture === actualPicture);
    if (actualPictureIndex >= pictures.length - 1) {
      setActualPictureIndex(0);
    } else {
      setActualPictureIndex(actualPictureIndex + 1);
    }
  };
  const previousPicture = () => {
    //pictures.find((picture) => picture === actualPicture);
    // pictures.find((picture, index) => picture === actualPicture);
    if (actualPictureIndex == pictures.length - pictures.length) {
      // setActualPictureIndex(0);
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
        <div className="slideshow-right-button-arrow" onClick={previousPicture}>
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
        <div className="slideshow-left-button-arrow" onClick={nextPicture}>
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
