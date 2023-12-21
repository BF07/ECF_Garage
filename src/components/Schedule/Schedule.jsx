import "../Schedule/schedule.css";
import React, { useEffect, useState } from "react";

const Schedule = () => {
    // Créer la date du jour
    const [currentDate, setCurrentDate] = useState(new Date());

    // Actualiser la date chaque seconde
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        // Nettoyer l'intervalle lors du démontage du composant
        return () => clearInterval(intervalId);
    }, []);

    const currentDay = currentDate.getDay(); // 0 pour dimanche
    const currentHour = currentDate.getHours();

    const creneaux = [
        { matin: [8, 12] },
        { apresmidi: [14, 18] }
    ];

    // Fonction pour déterminer si le garage est ouvert
    const isGarageOpen = () => {
        const creneauMatin = creneaux.find(c => c.matin !== undefined);
        const creneauApresmidi = creneaux.find(c => c.apresmidi !== undefined);

        if (currentDay >= 1 && currentDay <= 5) {
            return (
                currentHour >= creneauMatin.matin[0] && currentHour < creneauMatin.matin[1] ||
                currentHour >= creneauApresmidi.apresmidi[0] && currentHour < creneauApresmidi.apresmidi[1]
            );
        } else if (currentDay === 6) {
            return currentHour >= creneauMatin.matin[0] && currentHour < creneauMatin.matin[1];
        }

        return false;
    };

    // Fonction pour formater les créneaux d'ouverture
    const formatOpeningHours = () => {
        const creneauMatin = creneaux.find(c => c.matin !== undefined);
        const creneauApresmidi = creneaux.find(c => c.apresmidi !== undefined);

        return (
            <>
                <td>{creneauMatin && `${formatTime(creneauMatin.matin[0])} à ${formatTime(creneauMatin.matin[1])}`}</td>
                <td>{creneauApresmidi && `${formatTime(creneauApresmidi.apresmidi[0])} à ${formatTime(creneauApresmidi.apresmidi[1])}`}</td>
            </>
        );
    };

    const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

    const formatTime = (time) => {
        return time.toString().padStart(2, '0') + ":00";
    };

    // Fonction pour afficher les horaires d'ouvertures
    const tableRows = days.map((day, index) => {
        if (index === 5) {
            return (
                <tr key={index}>
                    <td>{day}</td>
                    <td>{creneaux[0].matin && `${formatTime(creneaux[0].matin[0])} à ${formatTime(creneaux[0].matin[1])}`}</td>
                    <td> Fermé</td>
                </tr>
            );
        } else if (index >= 0 && index < 5) {
            return (
                <tr key={index}>
                    <td>{day}</td>
                    {formatOpeningHours()}
                </tr>
            );
        } else if (index === 6) {
            return (
                <tr key={index}>
                    <td>{day}</td>
                    <td>Fermé</td>
                </tr>
            )
        }
    });
    

    return (
        <>
        <tbody className="garage-schedule">
            {isGarageOpen() ? (
                    <tr className="tr-open-close">
                        <td>Le garage est ouvert.</td>
                    </tr>
            ) : (
                    <tr className="tr-open-close">
                        <td>Le garage est fermé.</td>
                    </tr>
            )}
            {tableRows}
        </tbody>
        </>
    );
};

export default Schedule;
