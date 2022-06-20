import React from "react";
import rating_star_empty from "./../assets/img/rating_star_empty.jpg";
import rating_star_full from "./../assets/img/rating_star_full.jpg";

const Rating = ({ rating }) => {
  const stars = [];
  const rate = parseInt(rating);

  for (let i = 0; i < 5; i++) {
    if (i < rate)
      stars.push(
        <img
          src={rating_star_full}
          alt="full rating star"
          key={i}
          className="location-summary-right-stars-img"
        />
      );
    else
      stars.push(
        <img
          src={rating_star_empty}
          alt="empty rating star"
          key={i}
          className="location-summary-right-stars-img"
        />
      );
  }
  return <div>{stars}</div>;
};

export default Rating;
