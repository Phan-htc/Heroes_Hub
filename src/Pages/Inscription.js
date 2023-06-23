import React from 'react';

const Inscription = () => {
    return (
        <div>
            <div>
                <div className='flex justify-center text-white my-2'>
                <h1>Rejoignez l'aventure</h1>
                </div>
                <div className="flex justify-around">
                    <input type="text" placeholder='Pseudo' required />
                    <input type='email' placeholder='Adresse Mail' required />
                </div>
                <div className="flex justify-around my-2">
                    <input type="password" placeholder='Mot de passe' required />
                    <input type="password" placeholder='Confirmation Mot de passe' required />
                </div>
                <div className='text-white flex justify-center '>
                    <input type="submit" value='Rejoindre' className='rounded border px-2'/>
                </div>
            </div>
        </div>
    );
};

export default Inscription;