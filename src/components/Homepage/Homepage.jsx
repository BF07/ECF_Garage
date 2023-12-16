import { useState } from "react";
import "./homepage.css"
import FormFilterCar from "../Forms/FormFilterCar.jsx";
import Navbar from "../Navbar/Navbar.jsx";
import Button from "../Buttons/LandpageButton.jsx"

import ClioIV from "../../assets/Images/ClioIV.jpg"
import MercedesCLA from "../../assets/Images/mercedesCLA-image1.jpg"
import JaguarXF from "../../assets/Images/JaguarXF-image2.jpg"
import About from "../../assets/Images/about.jpg"
import Mecanique from "../../assets/Images/mecanique.jpg"
import Entretien from "../../assets/Images/entretien.jpg"
import Carrosserie from "../../assets/Images/carrosserie.jpg"
import Occasion from "../../assets/Images/sell-car.jpg"

import "@fontsource/anton"
import "@fontsource/inter"




export default function Homepage () {

  const variantsImages = [
    { image: ClioIV },
    { image: MercedesCLA },
    { image: JaguarXF },
  ];

  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const changeBackground = async (newBackgroundIndex) => {
    // Charger l'image de manière asynchrone
    await loadImage(variantsImages[newBackgroundIndex].image);

    // Mettre à jour l'index de l'arrière-plan
    setBackgroundIndex(newBackgroundIndex);
  };

  const loadImage = (url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = resolve;
      img.onerror = reject;
      img.src = url;
    });
  };

  const [switchTitleIndex, setSwitchTitleIndex] = useState(0);
  
  const variantsTitles = [
    {title: 'Découvrer nos véhicules disponibles'},
    {title: 'Rouler en toute confiance'},
    {title: 'Améliorer votre expérience de conduite'}
  ];

  const changeTitle = async (newTitleIndex) => {
    // Changer le titre de manière asynchrone
    await loadTitle(variantsTitles[newTitleIndex].title);

    // Mettre à jour l'index du titre
    setSwitchTitleIndex(newTitleIndex);
  }

  const loadTitle = (title) => {
    return new Promise((resolve) => {
      resolve();
    });
  };


    return (
      <>
        <Navbar />
        {/* Mobile */}
        <main>
          <section className="container-sales-car">
            <div
              className="sales-car"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${variantsImages[backgroundIndex].image})`,
                transition: `background-image 0.5 ease`,
              }}
            >
              <div className="wrapper-global-cars">
                <div className="menu-salesCar">
                  <p className="new-cars">Nouveautés en stock</p>
                  <h1 className="sales-carTitle">
                    {variantsTitles[switchTitleIndex].title}
                  </h1>
                  <Button
                    onChangeBackground={changeBackground}
                    onChangeTitle={changeTitle}
                  />
                </div>
                <FormFilterCar className="form-cars" />
              </div>
            </div>
          </section>

          <section className="about-us-section">
            <div className="about-wrapper">
              <div className="about">
                <div className="about-img">
                  <img src={About} alt="" />
                </div>

                <div className="about-text">
                  <h2 className="about-title">Qui sommes-nous ? </h2>
                  <p className="paragraph">
                    Fondé en 2022, notre garage a su convaincre de par les
                    nombreuses compétences de son équipe. Profitez d'une
                    multitude de services à bas prix. Chez V.PARROT, nous visons
                    l'excellence afin de vous satisfaire pleinement. N'hésitez
                    plus, contactez nous !
                  </p>
                  <div className="about-btn-wrapper">
                    <button className="aboutUs-btn" href="">
                      En savoir plus
                    </button>
                    <button className="contact-btn" href="">
                      Contacter nous
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="services-section">
            <div className="services-wrapper">
              <div className="services-scroll">
                <h2>Nos services</h2>
                <p>
                  Notre garage vous offre une multitude de services. De l'achat
                  d'un véhicule en passant par l'entretien, la mécanique ou la
                  carrosserie, nous nous adaptons à chacun de vos besoins.
                </p>
                <button className="services-btn">Voir nos services</button>
              </div>
              <div className="card-services-wrapper">
                <div className="list-services">
                  <div className="list">
                    <div className="service-content">
                      <a href="" className="service-image">
                        <img src={Occasion} alt="" />
                      </a>
                      <div className="service-description">
                        <a href="" className="service-link">
                          Véhicules d'occasions
                        </a>
                        <p className="paragraph-link">
                          Besoin d'un nouveau bolide ? Venez voir nos véhicules
                          disponibles pour tout budget ! Toutes nos voitures
                          d'occasions sont vérifiées et remise à neuve pour
                          vous. Nous vous proposons des voitures d'occasions
                          plus neuve que jamais !
                        </p>
                        <div className="link-with-line">
                          <a href="" className="link-line">
                            Voir en détails
                          </a>
                          <div className="red-line"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list">
                    <div className="service-content">
                      <a href="" className="service-image">
                        <img src={Entretien} alt="" />
                      </a>
                      <div className="service-description">
                        <a href="" className="service-link">
                          Entretien
                        </a>
                        <p className="paragraph-link">
                          Chez V.PARROT, nous nous occupons de l'entretien
                          complet de votre véhicule. Vidange, changement des
                          filtres, pneus, disques, plaquettes... Votre sécurité
                          est notre priorité !
                        </p>
                        <div className="link-with-line">
                          <a href="" className="link-line">
                            Voir en détails
                          </a>
                          <div className="red-line"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list">
                    <div className="service-content">
                      <a href="" className="service-image">
                        <img src={Mecanique} alt="" />
                      </a>
                      <div className="service-description">
                        <a href="" className="service-link">
                          Mécanique
                        </a>
                        <p className="paragraph-link">
                          Un problème avec votre véhicule ? Notre équipe
                          d'experts est à votre écoute. De la recherche à la
                          réparation, nous vous garantissons une entière
                          satisfaction !
                        </p>
                        <div className="link-with-line">
                          <a href="" className="link-line">
                            Voir en détails
                          </a>
                          <div className="red-line"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list">
                    <div className="service-content">
                      <a href="" className="service-image">
                        <img src={Carrosserie} alt="" />
                      </a>
                      <div className="service-description">
                        <a href="" className="service-link">
                          Carrosserie
                        </a>
                        <p className="paragraph-link">
                          Un impact, une rayure ? Votre carrosserie est enfoncée
                          suite à un choc ? Encore une fois, vous pouvez compter
                          sur notre équipe ! Notre polyvalence est notre atout
                          principal pour vous satisfaire !
                        </p>
                        <div className="link-with-line">
                          <a href="" className="link-line">
                            Voir en détails
                          </a>
                          <div className="red-line"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
};