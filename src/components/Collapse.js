import React, { useState, useEffect } from "react";

//const Collapse = (props) => { // et props.initialOpened, props.title, props.arrow et props.text
const Collapse = ({ initialOpened, title, text, arrow }) => {
  const [isOpened, setIsOpened] = useState(initialOpened);

  // useEffect(() => {
  //   console.log("L'ouverture a changé");
  // }, [isOpened]);

  return (
    // && : élément généré que si la condition est respectée // set.. modifie l'état initial pour un !isOpen (donc pas ouvert), cf. collapses
    // A faire : ajouter une class is-opened puis faire un rotate sur le arrow
    <div className="collapse">
      <div className="collapse-header">
        <h3>{title}</h3>
        <div className="button">
          <div
            id="button-arrow"
            onClick={() => setIsOpened(!isOpened)} //Marco à revoir
            // {isOpened && className="text-is-opened"}
            // classname={({ textIsOpenedText }) => textIsOpenedText && "text-is-opened"}
          >
            <svg
              width="24"
              height="15"
              viewBox="0 0 25 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.6635 0.859488L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859488L12.4605 10.6572L2.6635 0.859488V0.859488Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="collapse-text">
        {isOpened && <p className="collapse-text-is-opened">{text}</p>}
      </div>
    </div>
  );
};

export default Collapse;
