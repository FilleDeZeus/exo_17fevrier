import React, { useState, useEffect } from "react";

//composant Chronometre
export const Chronometre = () => {
    //creation des etats et de leurs fonction tous initialisé à la valeur 0
    const [seconde, setSeconde] = useState(0);
    const [minute, setMinute] = useState(0);
    const [heure, setHeure] = useState(0);

    //permet de mettre un intervale de temps toutes les 1sec
    useEffect(() => {
        const intervalId = setInterval(() => {
            //met à jour etat seconde en fonction de sa valeur
            setSeconde(seconde => {
                //si valeur >= 59, on le remet à 0
                if (seconde >= 59) {
                    //puis il  mettra à jour l'etat minute en fonction de sa valeur
                    setMinute(minute => {
                        //si valeur >= 59, on le remet à 0
                        if (minute >= 59) {
                            //puis il  mettra à jour l'etat heures en fonction de sa valeur
                            setHeure(heure => heure + 1);
                        return 0;
                        }
                        //si valeur en minute < 59 on l'increment de 1
                        return minute + 1;
                    });
                //si valeur en seconde >= 59, on le remet à 0
                return 0;
                }
            // Si la valeur en seconde est < 59, on l'incrémente de 1
            return seconde + 1;
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    
    // permet de formater le temps 
    const formatTime = (value) => {
        //si longeur inferieur à 2, ca ajoute un 0 devant
        return String(value).padStart(2, '0');
    };

    return (
        <div>
            {/* affiche le temps version formater  */}
            <p>{`${formatTime(heure)}:${formatTime(minute)}:${formatTime(seconde)}`}</p>
        </div>
    );
}

