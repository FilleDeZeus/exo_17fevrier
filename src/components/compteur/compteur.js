import React, { useState, useEffect } from 'react';

export const Compteur = () => {
    //etat du compteur initialement à 0
    const [compteur, setCompteur] = useState(0);

    return (
        <div>
            {/* valeur du compteur */}
            <p>Le compteur est à : {compteur}</p>
            {/* le bouton permet d'incrementer le compteur des que l'on clique dessus */}
            <button onClick={() => setCompteur(compteur + 1)}>Incrémenter</button>
        </div>
    )
}

