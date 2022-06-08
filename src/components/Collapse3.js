import React, { useState, useEffect } from "react";

const Collapse3Service = (props) => {
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
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </p>
      )}
    </div>
  );
};

export default Collapse3Service;
