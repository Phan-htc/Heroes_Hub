import React from 'react';
import Menu from '../Components/Menu';

const Home = () => {
    return (   
      <div>
        <div className="flex flex-row justify-center text-5xl bg-black">
            <div>
                <h1 className='text-white m-2'>Hero</h1>
            </div>
        <h1 className='border-solid rounded px-1 my-2 bg-hub-logo text-black'>HUB</h1>
      </div>
      <Menu/>
      </div>
    );
};

export default Home;