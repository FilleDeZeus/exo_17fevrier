import React, { useState, useEffect } from 'react';

export const Compteur = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Le composant a été mis à jour');
    });
    return (
        <div>
            <p>Le compteur est à : {count}</p>
            <button onClick={() => setCount(count + 1)}>Incrémenter</button>
        </div>
    )
}

