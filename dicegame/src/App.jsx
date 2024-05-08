// In App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Playgame from './components/Playgame';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playgame></Playgame>} />
      </Routes>
    </>
  );
}

export default App;

