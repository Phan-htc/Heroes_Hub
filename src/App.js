import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inscription from "./Pages/Inscription";
import Connexion from "./Pages/Connexion"
import Home from './Pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/Connexion" element={<Connexion/>}/>
          <Route path="/Inscription" element={<Inscription/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;