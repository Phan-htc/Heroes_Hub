import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inscription from "./Pages/Inscription";
import Connexion from "./Pages/Connexion"
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/Connexion" element={<Connexion/>}/>
          <Route path="/Inscription" element={<Inscription/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
};

export default App;