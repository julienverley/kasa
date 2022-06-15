import React from "react";
import { Navigate, useParams } from "react-router-dom";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import { apartments } from "../data/apartments";

const Location = () => {
  // Antoine
  const params = useParams(); // The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>
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
              <img src={location.host.picture} alt="location host picture" />
            </div>
          </div>

          <div className="location-summary-right-stars">
            {location.rating}
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                fill="#E3E3E3"
              />
            </svg>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                fill="#E3E3E3"
              />
            </svg>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                fill="#E3E3E3"
              />
            </svg>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                fill="#E3E3E3"
              />
            </svg>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                fill="#E3E3E3"
              />
            </svg>
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
