import React, {useState, useEffect} from 'react'

//composant Timer avec comme props duration
export const Timer = ({ duration }) => {

    //etat de time = duration et sa fonction qui met à jour
    const [time, setTime] = useState(duration);
    
    //met à jour de l'etat toutes les secondes
    useEffect(() => {
        //permet de decrementer le time toute les secondes
        const interval = setInterval(() => {
            setTime(time - 1);
        }, 1000);
        //nettoyage du timer
        return () => clearInterval(interval);
    }, [time]);
    
    // Effect qui remet à jour l'état time à la valeur initiale lorsqu'il atteint 0
    useEffect(() => {
        //si le tps est écoulé
        if (time === 0) {
            //on le remet à l'etat initial
            setTime(duration);
        }
    }, [time, duration]); //appelle de cette effet des time et duration change

    // fonction qui permet de formater le temps en minute et secondes --> time =tps en seconde
    const formatTime = (time) => {
        //calcul du nombre de minute 
        const minute = Math.floor(time / 60);
        //calcul du nombre de seconde
        const seconde = time % 60;
        //padStart ajoute un 0 devant si moins longueur inferieur à 2
        return `${minute.toString().padStart(2, '0')}:${seconde.toString().padStart(2, '0')}`;
    };
    return (
        <div>
            <h2>Temps restant:</h2>
            {/* temps formater */}
            <p>{formatTime(time)}</p>
        </div>
    )
}
