import React from 'react';
import Identification from './Identification';

const Header = () => {
    return (
    <div>  
        <Identification/>
        <div className="flex flex-row justify-center text-5xl bg-neutral-900">
            <div>
                <h1 className='text-white m-2'>Hero</h1>
            </div>
        <h1 className='border-solid rounded px-1 my-2 bg-hub-logo text-black'>HUB</h1>
        </div>
    </div>
    );
};

export default Header;