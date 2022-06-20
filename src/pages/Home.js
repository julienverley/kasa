import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import LocationCards from "../components/LocationCards";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner
        imageBackground={"./banner_background_home.jpg"}
        title="Chez vous, partout et ailleurs"
      />
      <LocationCards />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
