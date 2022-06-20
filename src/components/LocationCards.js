import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

const LocationCards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "/logements.json"
        //"https://restcountries.com/v3.1/all"
      )
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <div className="location-cards">
        {data.map((apartment, index) => (
          <LocationCard
            key={index}
            urlID={apartment.id}
            title={apartment.title}
            coverImage={apartment.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default LocationCards;

// -- Version mockée --

// import { apartments } from "../data/apartments";
// import LocationCard from "./LocationCard";
// import React, { useState, useEffect } from "react";

// const LocationCards = () => {
//   // Antoine
//   const [aparts, setAparts] = useState([]);

//   useEffect(() => {
//     // fetch()
//     //.then((response) => response.json())
//     //.then((data) => setApartments(data))
//   }, []);
//   return (
//     <div>
//       <div className="location-cards">
//         {apartments.map((apartment, index) => (
//           <LocationCard
//             key={index}
//             urlID={apartment.id}
//             title={apartment.title}
//             img={apartment.cover}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LocationCards;

//Version Axios, erreur : has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource
