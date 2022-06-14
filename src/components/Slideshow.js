import React, { useState } from "react";
import { apartments } from "../data/apartments";
import LogoFooter from "./LogoFooter";

const Slideshow = () => {
  let urlID = window.location.search.split("=")[1];
  const location = apartments.find((apartment) => apartment.id === urlID);

  const pictures = location.pictures;
  const [actualPicture, setActualPicture] = useState(pictures[0]);

  // 1/ Retrouver l'index de la photo affichée
  // 2/ Mettre à jour l'état, actualPicture avec +1
  // 3/ Quand index.lenght(fin), mettre à jour l'état avec la position 0
  // 4/ Onclick dans le SVG
  const nextPicture = () => {
    pictures.find((picture) => picture === actualPicture);
    // pictures.find((picture, index) => picture === actualPicture);
    console.log(actualPicture);
    setActualPicture(pictures[actualPicture + 1]);
    if (pictures.indexOf(actualPicture) >= pictures.length) {
      setActualPicture(pictures[0]);
    }
  };

  return (
    <div>
      <div className="slideshow-pictures">
        <img
          className="slideshow-pictures-img"
          src={actualPicture}
          alt="location cover"
        />
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
      </div>
    </div>
  );
};

export default Slideshow;
