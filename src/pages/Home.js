import React from "react";
import Counter from "../components/Counter";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Locations from "../components/Locations";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* <Logo /> */}
      <Header />
      <Counter initialOpen={true} />
      <Banner />
      <Locations />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
