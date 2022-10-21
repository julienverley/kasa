import React, { useState } from "react";

const Collapse = ({ initialOpened, title, text }) => {
  const [isOpened, setIsOpened] = useState(initialOpened);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpened(!isOpened)}>
        <h3>{title}</h3>
        <div className="collapse-button-arrow">
          <div
            className={
              isOpened
                ? "collapse-button-arrow-svg-opened"
                : "collapse-button-arrow-svg"
            }
          >
            <img src="./arrow-collapse.svg" alt="arrow collapse" />
          </div>
        </div>
      </div>
      <div className="collapse-text">
        {isOpened && <div className="collapse-text-is-opened">{text}</div>}
      </div>
    </div>
  );
};

export default Collapse;
