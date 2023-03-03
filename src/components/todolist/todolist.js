import { useState, useEffect } from 'react';

//composant todolist avec props task
export const ToDoList = ({ tasks }) => {
    //etat egale a task et focntion pour mette à jour
    const [filtre, setfiltre] = useState(tasks);
    //etat vide pour commencer et fonction pour mette à jour
    const [cherche, setcherche] = useState('');

    //met à jour la lliste des taches filtré des que les etats change
    useEffect(() => {
        //filtre la liste des taches en fonction de la recherche
        const filtrer = tasks.filter((task) =>
            task.title.toLowerCase().includes(cherche.toLowerCase())
        );
        //fonction qui met à jour en fonction de ce qui est filtré
        setfiltre(filtrer);
    }, [cherche, tasks]); // fonction appelé si un de ces deux etat change

    //cette fonction s'occupe de gerer les changement de la progressBar
    const handleCherche = (event) => {
        //est mis à jour en fct de la nouvelle valeur de la bar de recherche
        setcherche(event.target.value);
    };

    return (
        <div>
            <h2>ToDo List:</h2>
            {/* appelle la fonction lorsqu'elle change */}
            <input type="text"  value={cherche} onChange={handleCherche} /> 
            <ul>
            {/* Affichage de la liste des tâches filtré ou non */}
                {filtre.map((task) => (
                <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};



