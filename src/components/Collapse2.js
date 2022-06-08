import React, { useState, useEffect } from "react";

const Collapse2Respect = (props) => {
  const [isOpened, setIsOpened] = useState(props.initialOpened);

  useEffect(() => {
    console.log("L'ouverture a changé");
  }, [isOpened]);

  return (
    // && : élément généré que si la condition est respectée // set.. modifie l'état initial pour un !isOpen (donc pas ouvert), cf. collapses
    <div className="collapse">
      <button onClick={() => setIsOpened(!isOpened)}>arrow icon</button>
      {isOpened && (
        <p>
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </p>
      )}
    </div>
  );
};

export default Collapse2Respect;
