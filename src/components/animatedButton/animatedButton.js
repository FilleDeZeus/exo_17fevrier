import React, { useState} from "react";
import './public/css/animatedButton.css'

export const AnimatedButton = () => {
  //etat de carre initial false
  const [carreEffet, setCarreEffet] = useState(false);
  // etat du nombre de clics
  const [nombreClick, setNombreClick] = useState(0);


  const handleClick = () => {
    //si pas encore clic = 0
    if (nombreClick === 0) {
      // Au premier clic, afficher le carré qui clignote
      setCarreEffet(true);
      setNombreClick(1);
    } else {
      // Au deuxième clic, le carré disparait
      setCarreEffet(false);
      setNombreClick(0);
    }
  };

  return (
    <div>
      {/* au click il appelle handleClick */}
      <button onClick={handleClick}>Clique-ici</button>
      {/* si carre est true alors la div carre s'affiche*/}
      {carreEffet ? (
        <div id="carre"></div>
      ): null}
    </div>
  );
};