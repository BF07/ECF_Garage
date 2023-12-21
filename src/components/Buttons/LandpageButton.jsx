import { useMemo, useState } from "react"
import ClioIV from "../../assets/Images/ClioIV.jpg"
import MercedesCLA from "../../assets/Images/mercedesCLA-image1.jpg"
import JaguarXF from "../../assets/Images/JaguarXF-image2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function LandpageButton ({onChangeBackground, onChangeTitle}) {

    const variants = [
        {text: 'Voir notre Clio IV', image: ClioIV, href: ''},
        {text: 'Voir notre Mercedes CLA', image: MercedesCLA, href: ''},
        {text: 'Voir notre Jaguar XF', image: JaguarXF, href: ''}
    ]
    
    const [variantIndex, setVariantIndex] = useState(0);

    const changeVariant = (direction) => {
        const nextIndex = (variantIndex + direction + variants.length) % variants.length;
        setVariantIndex(nextIndex);
        onChangeBackground(nextIndex);
        onChangeTitle(nextIndex);
    };
    
    return (
        <>
            <div className="cta-salesCar">
                <button className="occas-btn">Nos occasions</button>
                <button
                    className="newCar-btn"
                    style={{ transition: "all 0.4s ease-in-out" }}
                    onClick={() => (window.location.href = variants[variantIndex].href)}
                >
                    {variants[variantIndex].text}
                </button>
            </div>
            <div className="arrows">
                <div className="right" onClick={() => changeVariant(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className="left" onClick={() => changeVariant(1)}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
        </>
        );
}