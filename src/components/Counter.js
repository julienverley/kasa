import React, { useState, useEffect } from "react";

const Counter = (props) => {
  const [isOpen, setIsOpen] = useState(props.initialOpen);

  useEffect(() => {
    console.log("L'ouverture a changée");
  }, [isOpen]);

  return (
    <div>
      {isOpen && <p>Coucou Julien !</p>}
      <button onClick={() => setIsOpen(!isOpen)}>Ouvrir/Fermer</button>
    </div>
  );
};

export default Counter;
