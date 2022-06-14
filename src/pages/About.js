import Banner from "../components/Banner";
import React from "react";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Counter from "../components/Counter";

const About = () => {
  return (
    <div>
      <Header />
      <Banner imageBg={"./kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg"} />
      <div className="about-collapse">
        <Collapse
          title="Fiabilité"
          initialOpened={false}
          text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes."
        />
      </div>
      <div className="about-collapse">
        <Collapse
          title="Respect"
          initialOpened={false}
          text=" La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
      </div>

      <div className="about-collapse">
        <Collapse
          title="Service"
          initialOpened={false}
          text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
      </div>

      <div className="about-collapse">
        <Collapse
          title="Sécurité"
          initialOpened={false}
          text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
      <Footer />
    </div>
  );
};

export default About;
