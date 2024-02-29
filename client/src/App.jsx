import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/service" element={<Service/>} />
          <Route exact path="/contact" element={<Contact/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
