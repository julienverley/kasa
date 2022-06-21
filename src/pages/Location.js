import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Rating from "../components/Rating";
import Slideshow from "../components/Slideshow";
import { apartments } from "../data/apartments";

const Location = () => {
  // Get dynamic params from the current URL:
  const params = useParams();
  // Get the apartment with the right id :
  const location = apartments.find((apartment) => apartment.id === params.id);
  if (!location) {
    return <Navigate to="/404"></Navigate>;
  }

  return (
    <div>
      <Header />
      <Slideshow id={params.id} />
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
              <img src={location.host.picture} alt="location host" />
            </div>
          </div>

          <div className="location-summary-right-stars">
            <Rating rating={location.rating}/>
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
            text={location.equipments.map((equipement, index) => (
              <div key={index}>{equipement}</div>
            ))}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Location;
