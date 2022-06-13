import React from "react";
import Collapse from "../components/Collapse";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import { apartments } from "../data/apartments";

const Location = () => {
  return (
    <div>
      <Header />
      <Slideshow />
      <div className="location-summary">
        <div className="location-summary-left">
          <div className="location-summary-left-title">
            {apartments[0].title}
          </div>
          <div className="location-summary-left-location">
            {apartments[0].location}
          </div>
          <div className="location-summary-left-tags">
            {apartments[0].tags[0]}
          </div>
        </div>
        <div className="location-summary-right">
          <div className="location-summary-right-host">
            <div className="location-summary-right-host-name">
              {apartments[0].host.name}
            </div>
            <div className="location-summary-right-host-picture">
              <img src={apartments[0].host.picture} alt="" />
            </div>
          </div>
          <div className="location-summary-right-rating">
            {apartments[0].rating} stars SVG
          </div>
        </div>
      </div>
      <div className="location-collapses-2-columns">
        <div className="location-collapse">
          <Collapse
            title="Description"
            initialOpened={false}
            text={apartments[0].description}
          />
        </div>
        <div className="location-collapse">
          <Collapse
            title="Équipements"
            initialOpened={false}
            text={apartments[0].equipments}
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
