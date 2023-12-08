import { useState } from "react";
import "../Landpage/landpage.css"
import Button from "../Buttons.jsx/LandpageButton.jsx"
import ClioIV from "../../assets/Images/ClioIV.jpg"
import MercedesCLA from "../../assets/Images/mercedesCLA-image1.jpg"
import JaguarXF from "../../assets/Images/JaguarXF-image2.jpg"


export default function Landpage () {

  const variants = [
    { image: ClioIV },
    { image: MercedesCLA },
    { image: JaguarXF },
  ]

  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const changeBackground = async (newBackgroundIndex) => {
    // Charger l'image de manière asynchrone
    await loadImage(variants[newBackgroundIndex].image);

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

    return (
      <>
        <main>
          <div className="sales-car" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${variants[backgroundIndex].image})`}}>
            <div className="menu-salesCar">
              <p className="new-cars">Nouveautés en stock</p>
              <h1 className="sales-carTitle">
                Découvrez nos véhicules disponibles
              </h1>
              <div className="cta-salesCar">
                <button className="occas-btn">Nos occasions</button>
                <Button onChangeBackground={changeBackground} />
              </div>
            </div>
          </div>
        </main>
      </>
    );
}