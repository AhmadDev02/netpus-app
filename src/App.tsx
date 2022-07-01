import React from 'react'
import { Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { UserAuthContextProvider } from './context/UserAuthContext';

// import Navbar from './components/Navbar/Navbar';
import { Home, JenisBuku, KoleksiBuku, Login, ProtectedRoute, Register } from './pages';

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
              <Route path="/JenisBuku" element={<JenisBuku />} />
              <Route path="/KoleksiBuku" element={<KoleksiBuku />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </>
  );
}

export default App;
