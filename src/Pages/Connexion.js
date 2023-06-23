import React from 'react';

const Connexion = () => {
    return (
        <div>
            <div className='flex justify-center text-white my-2'>
                <h1>
                    Heureux de vous revoir Aventurier !
                </h1>
            </div>
            <div className="flex justify-around my-2">
                <input type='email' placeholder='Adresse Mail' required />
                <input type="password" placeholder='Mot de passe' required />
            </div>
            <div className='text-white flex justify-center '>
                <input type="submit" value="Valider" className='rounded border px-2' />
            </div>
        </div>
    );
};

export default Connexion;