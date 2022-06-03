import React from "react";
import Counter from "../components/Counter";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Locations from "../components/Locations";

const Home = () => {
  return (
    <div>
      {/* <Logo /> */}
      <Header />
      <Banner />
      <Locations />
      <br />
      <Counter initialOpen={true} />
    </div>
  );
};

export default Home;
