import React, { useState } from "react";
import { act } from "react-dom/test-utils";
import { apartments } from "../data/apartments";
import LogoFooter from "./LogoFooter";

// id vient directement des props
const Slideshow = (props) => {
  // Get
  const location = apartments.find((apartment) => apartment.id === props.id);

  const pictures = location.pictures;
  const [actualPictureIndex, setActualPictureIndex] = useState(0); 
  // Utiliser l'index et pas l'image elle-même

  // 1/ Retrouver l'index de la photo affichée
  // 2/ Mettre à jour l'état de l'index, actualPictureIndex avec + 1, - 1, fin du tableau etc.
  // 3/ Onclick autour du SVG
  const nextPicture = () => {
    if (actualPictureIndex >= pictures.length - 1) {
      setActualPictureIndex(0);
    } else {
      setActualPictureIndex(actualPictureIndex + 1);
    }
  };
  const previousPicture = () => {
    if (actualPictureIndex == pictures.length - pictures.length) {
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
          className={pictures.length > 1 ? "slideshow-left-button-arrow" : "slideshow-left-button-arrow-display-none"}
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
          className={pictures.length > 1 ? "slideshow-right-button-arrow" : "slideshow-right-button-arrow-display-none"}
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
