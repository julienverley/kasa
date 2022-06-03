import React from "react";
import { apartments } from "../data/apartments";

const LocationCards = () => {
  return (
    <div>
      <div className="locations">
        {apartments.map((apartment) => (
          <div className="location-cards">
            <div className="location-cards-title">
                {apartment.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationCards;
