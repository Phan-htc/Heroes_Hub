import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inscription from "./Pages/Inscription";
import Connexion from "./Pages/Connexion"

const App = () => {
  return (
    <div className='bg-black'>
      <div className="flex flex-row justify-center text-5xl bg-black">
        <div>
          <h1 className='text-white m-2'>Hero</h1>
        </div>
        <h1 className='border-solid rounded px-1 my-2 bg-hub-logo text-black'>HUB</h1>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/Connexion" element={<Connexion/>}/>
          <Route path="/Inscription" element={<Inscription/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;