import React, { useState, useEffect } from "react";

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
        {isOpened && <div className="collapse-text-is-opened">{text}</div>}
      </div>
    </div>
  );
};

export default Collapse;
