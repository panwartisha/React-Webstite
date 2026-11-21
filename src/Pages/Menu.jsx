import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Courses from './Courses'

function Menu() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Menu;