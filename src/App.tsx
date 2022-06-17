import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar/Navbar';
import { Home, JenisBuku, KoleksiBuku, Login, Register } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <nav>
        <Link to='/'>Home</Link> |
        <Link to='/JenisBuku'>JenisBuku</Link>
      </nav> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/JenisBuku' element={<JenisBuku />} />
        <Route path='/KoleksiBuku' element={<KoleksiBuku />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
