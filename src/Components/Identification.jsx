import React from 'react';
// import { CgProfile } from "react-icons/cg"

const Identification = () => {
    return (
        <div className='text-white flex flex-row-reverse bg-neutral-900'>
            {/* <CgProfile/> */}
            <div className='hover'>
                <a href="Connexion" className='mx-3'>Connexion</a>
                <a href="Inscription">Inscription</a>
            </div>
        </div>
    );
};

export default Identification;