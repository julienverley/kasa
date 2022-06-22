import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

const LocationCards = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/logements.json").then((res) => setData(res.data));
    //axios.get("/logements.json").then((res) => console.log(res.data));
  }, []);
  //console.log(data);

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
