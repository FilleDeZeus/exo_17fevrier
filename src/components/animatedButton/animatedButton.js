import React, { useState, useEffect } from "react";
import './public/css/animatedButton.css'
//component AnimatedButton
export const AnimatedButton = () => {
  const carre = document.createElement("div");
  carre.id = "carre";
  document.body.appendChild(carre);
  //etat de carre initial false
  const [carreEffet, setCarreEffet] = useState(false);

  // etat du nombre de clics
  const [nombreClick, setNombreClick] = useState(0);
  //appele si carrec change d'etat 
  useEffect(() => {

    //declaration de varaible
    let intervalId;

    //si carre est true
    if (carreEffet) {
      //creation d'une fonction repete toute les seconde
      intervalId = setInterval(() => {
        document.getElementById("carre").classList.toggle("clignote");
      }, 1000);
    }
    //nettoyage 
    return () => {
      clearInterval(intervalId);
    };
  }, [carreEffet]);

  
  const handleClick = () => {
    if (nombreClick === 0) {
      // Au premier clic, afficher le carré et commencer à clignoter
      setCarreEffet(true);
      setNombreClick(1);
    } else {
      // Au deuxième clic, cacher le carré et arrêter de clignoter
      setCarreEffet(false);
      setNombreClick(0);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Clique-ici</button>
      {carreEffet && <div id="carre"></div>}
    </div>
  );
}

