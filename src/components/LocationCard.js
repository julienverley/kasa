import React from "react";
import { NavLink } from "react-router-dom";

const LocationCard = (props) => {
  return (
    <div className="location-card">
      <NavLink to={"/location/?id=" + props.urlID} className="nav-location">
        <img className="location-card-img" src={props.img} />
        <div className="location-card-title">{props.title}</div>
      </NavLink>
    </div>
  );
};

export default LocationCard;

// Projet 6
//  // On click event, URL
//  userCardDOM.addEventListener('click', () => {
//   window.location.href = `photographer.html?id=${photographer.id}`;
// });
