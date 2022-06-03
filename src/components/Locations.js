import React from "react";
//import React, { useEffect } from "react";
import LocationCards from "./LocationCards";
//import axios from "axios";

// const Locations = () => {
//   // Le useEffect se joue lorsque le composant est monté
//   useEffect(() => {
//     axios
//       .get(
//         "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
//       )
//       .then((res) => console.log(res));
//   }, []);

//   return <div className="locations"></div>;
// };

//Avec Antoine :
const Locations = () => {
  return (
    <LocationCards />
  );
};

export default Locations;
