import React from "react";
import Collapse1Fiabilite from "../components/Collapse";
import Collapse2Respect from "../components/Collapse2";
import Collapse3Service from "../components/Collapse3";
import Collapse4Securite from "../components/Collapse4";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <div>
      <Header />
      <div className="collapse">
        <h3>Fiabilité</h3>
        <Collapse1Fiabilite initialOpened={false} />
      </div>
      <div className="collapse">
        <h3>Respect</h3>
        <Collapse2Respect initialOpened={false} />
      </div>
      <div className="collapse">
        <h3>Service</h3>
        <Collapse3Service initialOpened={false} />
      </div>
      <div className="collapse">
        <h3>Sécurité</h3>
        <Collapse4Securite initialOpened={false} />
      </div>
      <Footer />
    </div>
  );
};

export default About;
