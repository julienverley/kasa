import { apartments } from "../data/apartments";
import LocationCard from "./LocationCard";
import React from "react";

const LocationCards = () => {
  return (
    <div>
      <div className="location-cards">
        {apartments.map((apartment, index) => (
          <LocationCard
            key={index}
            urlID={apartment.id}
            title={apartment.title}
            img={apartment.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationCards;

// // Version Axios, erreur : has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const LocationCards = () => {
//   const [data, setData] = useState([]); // useState = hook // const [... : variable React
//   // Le useEffect se joue dès que le composant est monté
//   useEffect(() => {
//     // hook
//     axios
//       .get(
//         "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
//         //"https://restcountries.com/v3.1/all"
//       )
//       .then((res) => setData(res.data));
//   }, []);

//   return (
//     <div className="locations">
//       {data.map((locationCard) => (
//         <div>{locationCard.title}</div>
//       ))}
//     </div>
//   );
// };

// export default LocationCards;
