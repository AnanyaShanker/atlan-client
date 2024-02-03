// App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import Home from "./Home";
import './App.css';

const App = () => {
  return (
    <>
      <Navbar expand="lg" className="custom-navbar-bg">
        <Container>
          <Navbar.Brand href="#home" className="custom-brand-text">
            AI Models
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Remove Nav and NavDropdown elements */}
            <button className="btn btn-primary btn-spaceship" onClick={() => alert("What's Trending clicked!")}>
              🚀 What's Trending!
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Home />
    </>
  );
};

export default App;
