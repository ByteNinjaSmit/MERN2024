import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ColorSchemesExample = () => {
  const location = useLocation();

  return (
    <>
      <Navbar expand="lg" className="bg-dark navbar-dark ">
        <Container fluid>
          <Navbar.Brand to="/">MERN_2024</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 justify-content-evenly"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link
                style={{ color: location.pathname === '/' ? 'gray' : 'white', textDecoration: 'none', padding: '5px 12px' }}
                to="/"
              >
                Home
              </Link>
              <Link
                style={{ color: location.pathname === '/about' ? 'gray' : 'white', textDecoration: 'none', padding: '5px 12px' }}
                to="/about"
              >
                About
              </Link>
              <Link
                style={{ color: location.pathname === '/service' ? 'gray' : 'white', textDecoration: 'none', padding: '5px 12px' }}
                to="/service"
              >
                Serivce
              </Link>
              <Link
                style={{ color: location.pathname === '/contact' ? 'gray' : 'white', textDecoration: 'none', padding: '5px 12px' }}
                to="/contact"
              >
                Contact
              </Link>
              <Link
                style={{ color: location.pathname === '/register' ? 'gray' : 'white', textDecoration: 'none', padding: '5px 12px' }}
                to="/register"
              >
                Register
              </Link>
            </Nav>
            <Link to="/Login">
              <Button variant="success">Login</Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ColorSchemesExample;