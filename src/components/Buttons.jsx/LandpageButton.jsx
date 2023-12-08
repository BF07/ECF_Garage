import { useState, useEffect } from "react"
import ClioIV from "../../assets/Images/ClioIV.jpg"
import MercedesCLA from "../../assets/Images/mercedesCLA-image1.jpg"
import JaguarXF from "../../assets/Images/JaguarXF-image2.jpg"

export default function LandpageButton ({onChangeBackground, onChangeTitle}) {

    const variants = [
        {text: 'Voir notre Clio IV', image: ClioIV, href: ''},
        {text: 'Voir notre Mercedes CLA', image: MercedesCLA, href: ''},
        {text: 'Voir notre Jaguar XF', image: JaguarXF, href: ''}
    ]
    
    const [variantIndex, setVariantIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const nextIndex = (variantIndex + 1) % variants.length;
            setVariantIndex(nextIndex);
            onChangeBackground(nextIndex)
            onChangeTitle(nextIndex)
        }, 5000);

        return () => clearTimeout(timeout);
    }, [variantIndex ,onChangeBackground, onChangeTitle, variants]);

    return <button className="newCar-btn" onClick={() => window.location.href = variants[variantIndex].href}>{variants[variantIndex].text}</button>

}