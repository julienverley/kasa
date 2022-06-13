import React from "react";
import Counter from "../components/Counter";
import Header from "../components/Header";
import Banner from "../components/Banner";
//import Locations from "../components/Locations";
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
      {/* <Banner title="Chez vous 2" /> */}
      <LocationCards />
      <br />
      <Footer />
      <Counter initialOpen={true} />
    </div>
  );
};

export default Home;
