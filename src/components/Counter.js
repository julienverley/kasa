import React, { useState, useEffect } from "react";

const Counter = (props) => {
  const [isOpen, setIsOpen] = useState(props.initialOpen);

  useEffect(() => {
    console.log("L'ouverture a changé");
  }, [isOpen]);

  return (
    // && : élément généré que si la condition est respectée // set.. modifie l'état initial pour un !isOpen (donc pas ouvert), cf. collapses
    <div>
      {isOpen && <p>Coucou Julien !</p>}
      <button onClick={() => setIsOpen(!isOpen)}>Ouvrir/Fermer</button>
    </div>
  );
};

export default Counter;
