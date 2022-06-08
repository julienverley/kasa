import React, { useState, useEffect } from "react";

const Collapse4Securite = (props) => {
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
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </p>
      )}
    </div>
  );
};

export default Collapse4Securite;
