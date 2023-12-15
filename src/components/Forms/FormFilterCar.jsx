import { useState } from "react"
import "../Forms/formFilterCar.css"
import Slider from "react-slider"

export default function FormFilterCar () {

    const [selectedYear, setSelectedYear] = useState(2024);


    const handleYearChange = (event) => {
        setSelectedYear(parseInt(event.target.value));
    };

    const MIN = 0;
    const MAX = 100000; 

    const [price, setPrice] = useState([MIN, MAX])
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100000);

    const handleMinPriceChange = (event) => {
        const newMinPrice = parseInt(event.target.value);
        setMinPrice(newMinPrice);

        // Bloquer le prix minimum à la valeur actuelle du prix maximum
        document.getElementById('minPrice').max = maxPrice.toString();
    };

    const handleMaxPriceChange = (event) => {
        setMaxPrice(parseInt(event.target.value));

        // Mettre à jour la valeur maximale du prix minimum
        document.getElementById("minPrice").max = event.target.value;
    };

    return (
      <>
        <div className="form-wrapper">
          <h3 className="form-title">Trouver votre voiture</h3>
          <div className="form-block">
            <form id="filter-form" name="filter-form" method="get">
              <label htmlFor="brand" className="text-white">
                Marque
              </label>
              <select name="brand" id="brand" className="wrapper-select">
                <option value>Marque*</option>
                <option value="Renault">Renault</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Mercedes">Mercedes</option>
                <option value="BMW">BMW</option>
                <option value="Audi">Audi</option>
                <option value="Jaguar">Jaguar</option>
                <option value="Porsche">Porsche</option>
                <option value="Autre">Autre</option>
              </select>
              <label htmlFor="model" className="text-white">
                Modèle
              </label>
              <select name="model" id="model" className="wrapper-select">
                <option value>Modèle*</option>
                <option value="Clio">Clio</option>
                <option value="2008">2008</option>
                <option value="308">308</option>
                <option value="CLA">CLA</option>
                <option value="Classe A">Classe A</option>
                <option value="Serie 1">Serie 1</option>
                <option value="i8">i8</option>
                <option value="A1">A1</option>
                <option value="XF">XF</option>
                <option value="Macan">Macan</option>
                <option value="911">911</option>
                <option value="Autres">Autres</option>
              </select>
              <label htmlFor="year" className="text-white year-label">
                Année : {selectedYear}
              </label>
              <input
                type="range"
                id="year"
                name="year"
                min={1990}
                max={2024}
                value={selectedYear}
                onChange={handleYearChange}
              />
              <div className="price-range-container">
                <label htmlFor="price" className="text-white">
                  Plage de prix: {price[0]} € - {price[1]} € 
                </label>
                <Slider className={"slider"} value={price} min={MIN} max={MAX} onChange={setPrice} />
              </div>
              <div className="form-btn-wrapper">
                <button className="form-btn" href="/">
                  Rechercher
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    ); 
}