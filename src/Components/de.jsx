import React from 'react';

const de = () => {
    // image pour le dé
    // animation
    // liaison avec l'interface
    let resultat;
    let criticité
    function lancé(){
        resultat.Math.random(8);
    }
        criticité = (lancé < 1 && lancé > 8 ? resultat : lancé === 1 ? "Tu as fais un échec critique" : lancé ===8 ? "Tu as fais une réussite critique" : resultat);
        
    return (
        <div>
            <p className='text-white'>Ton lancer de dé a généré :{resultat}</p>
            
            <button onClick={lancé} className='text-white'>
                lancé de dé
            </button>
        </div>
    );
};

export default de;