import React from "react";
import { NavLink } from "react-router-dom";

const LocationCard = (props) => {
  return (
    <div className="location-card">
      <NavLink to={"/location/" + props.urlID} className="nav-location">
        <img
          className="location-card-img"
          src={props.coverImage}
          alt={props.title}
        />
        <div className="location-card-title">{props.title}</div>
      </NavLink>
    </div>
  );
};

export default LocationCard;
