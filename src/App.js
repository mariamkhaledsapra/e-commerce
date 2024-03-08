import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Home from "./pages/Category/Home";
import About from "./pages/Category/About";
import Coatings from "./pages/Category/Coatings";
import ShoppingCartProvider from "./context/ShoppingCartContext";
//import Loginpage from './pages/Auth/Loginpage.js';
//import Signpage from './pages/Auth/Signpage.js';
const App = () => {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Container className="mb-4">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Coatings" element={<Coatings />} />
          <Route path="/sections" element={<sections />} />

        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App;
