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
        title="Chez vous, partout et ailleurs"
        imageBg={"./banner_background.jpg"}
      />
      <LocationCards />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
