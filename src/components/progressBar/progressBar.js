import React, {useState,useEffect} from 'react'
import './style/css/progressBar.css';

//component ProgressBar
export const ProgressBar = () => {
    //etat de progress est à 0
    const [progress, setProgress] = useState(0);

    //appeleer si changement de l'etat progress
    useEffect(() => {
        //appelle la fonction toute les secondes
        const interval = setInterval(() => {
            //si valeur <100 
            if (progress < 100) {
                // il rajoute 10
            setProgress(progress + 10);
            } else {
                // Sinon, après 3s, remet la valeur à 0
                setTimeout(() => {
                    setProgress(0);
                }, 3000);
            }
        }, 1000);
        //nettoyage
        return () => clearInterval(interval);
    }, [progress]);

    return (
        <div className="progressBar">
            <div style={{width: `${progress}%`}} className="styleProgressBar"></div>
        </div>

    );
};