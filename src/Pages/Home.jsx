import React from 'react';
// import de from '../Components/de';

// Test de la fonction de génération de dé, a tout envoyé vers le composant dé et l'appeler lorsqu'un joueur est connecté et qu'il est en partie.
// Probleme avec la fonction math
const Home = () => {
  let resultat;
  let criticité
  function lancé(){
      resultat.Math.random(8);
  }
      criticité = (lancé < 1 && lancé > 8 ? resultat : lancé === 1 ? "Tu as fais un échec critique" : lancé ===8 ? "Tu as fais une réussite critique" : resultat);
      
    return (   
      <div>
        <de/>
        <p className='text-white'>hello je suis bob</p>
        <div>
            <p className='text-white'>Ton lancer de dé a généré :{resultat}</p>
            
            <button onClick={lancé} className='text-white border-2'>
                lancé de dé
            </button>
            <div>
              toto
            </div>
        </div>
      </div>

      
    );
};

export default Home;