import React from "react";
import { NavLink } from "react-router-dom";

const LocationCard = ({ urlID, coverImage, title }) => {
  return (
    <div className="location-card">
      <NavLink to={"/location/" + urlID} className="nav-location">
        <img className="location-card-img" src={coverImage} alt={title} />
        <div className="location-card-title">{title}</div>
      </NavLink>
    </div>
  );
};

export default LocationCard;
