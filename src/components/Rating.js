import React from "react";
import rating_star_empty from "./../assets/img/rating_star_empty.jpg";
import rating_star_full from "./../assets/img/rating_star_full.jpg";

const Rating = ({ rating }) => {
  const stars = [];
  const rate = parseInt(rating);

  for (let i = 0; i < 5; i++) {
    stars.push(
      <img
        src={i < rate ? rating_star_full : rating_star_empty}
        alt="full rating star"
        key={i}
        className="location-summary-right-stars-img"
      />
    );
  }
  return <div>{stars}</div>;
};

export default Rating;
