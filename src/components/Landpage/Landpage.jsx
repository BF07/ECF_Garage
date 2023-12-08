import { useState } from "react";
import "../Landpage/landpage.css"
import Button from "../Buttons.jsx/LandpageButton.jsx"
import ClioIV from "../../assets/Images/ClioIV.jpg"
import MercedesCLA from "../../assets/Images/mercedesCLA-image1.jpg"
import JaguarXF from "../../assets/Images/JaguarXF-image2.jpg"


export default function Landpage () {

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
      console.log(`Titre chargé : ${title}`);
      resolve();
    });
  };


    return (
      <>
        <main>
          <div className="sales-car" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${variantsImages[backgroundIndex].image})`}}>
            <div className="menu-salesCar">
              <p className="new-cars">Nouveautés en stock</p>
              <h1 className="sales-carTitle">
                {variantsTitles[switchTitleIndex].title}
              </h1>
              <div className="cta-salesCar">
                <button className="occas-btn">Nos occasions</button>
                <Button onChangeBackground={changeBackground} onChangeTitle={changeTitle} />
              </div>
            </div>
          </div>
        </main>
      </>
    );
}