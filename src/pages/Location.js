import React from "react";
import { Navigate } from "react-router-dom";
import Collapse from "../components/Collapse";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import { apartments } from "../data/apartments";

const Location = () => {
  let urlID = window.location.search.split("=")[1];
  const location = apartments.find((apartment) => apartment.id === urlID);
  if (!location) {
    return <Navigate to="/404"></Navigate>;
  }

  return (
    <div>
      <Header />
      <Slideshow />
      <div className="location-summary">
        <div className="location-summary-left">
          <div className="location-summary-left-title">{location.title}</div>
          <div className="location-summary-left-location">
            {location.location}
          </div>
          <div className="location-summary-left-tags">
            {location.tags.map((tag, index) => (
              <div key={index} className="location-summary-left-tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="location-summary-right">
          <div className="location-summary-right-host">
            <div className="location-summary-right-host-name">
              {location.host.name}
            </div>
            <div className="location-summary-right-host-picture">
              <img src={location.host.picture} alt="location host picture" />
            </div>
          </div>

          <div className="location-summary-right-rating">
            {location.rating} stars SVG
          </div>
        </div>
      </div>
      <div className="location-collapses-2-columns">
        <div className="location-collapse">
          <Collapse
            title="Description"
            initialOpened={false}
            text={location.description}
          />
        </div>
        <div className="location-collapse">
          <Collapse
            title="Équipements"
            initialOpened={false}
            text={location.equipments.map((equipement) => (
              <div>{equipement}</div>
            ))}
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
