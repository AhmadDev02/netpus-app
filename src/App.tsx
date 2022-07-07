import React from 'react'
import { Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Edukasi from './components/Edukasi/Edukasi';
import Programming from './components/Programming/Programming';
import Santai from './components/Santai/Santai';
import Story from './components/Story/Story';
import Teknologi from './components/Teknologi/Teknologi';
import { UserAuthContextProvider } from './context/UserAuthContext';

// import Navbar from './components/Navbar/Navbar';
import { Home, JenisBuku, KoleksiBuku, Login, Newest, ProtectedRoute, Register, } from './pages';


function App() {
  return (
    <>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/Home" element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>}
              />
              <Route path='/' element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Newest" element={<Newest />} />
              <Route path="/JenisBuku" element={<JenisBuku />} />
              <Route path="/KoleksiBuku" element={<KoleksiBuku />} />
              <Route path="/programming" element={<Programming />} />
              <Route path="/story" element={<Story />} />
              <Route path="/edukasi" element={<Edukasi />} />
              <Route path="/santai" element={<Santai />} />
              <Route path="/teknologi" element={<Teknologi />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </>
  );
}

export default App;
