import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import Home from './Home';
import LoadingPage from './LoadingPage';
import ModelDetailPage from './ModelDetailPage';// Import the ModelDetailPage component
import ModelDetail from './ModelDetail'; 
import Explore from './Explore.js';
import './App.css';


const App = () => {
  const [showModelDetail, setShowModelDetail] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const handleWhatsTrendingClick = () => {
    // Set showLoading to true when the button is clicked
    setShowLoading(true);

    // Simulate an asynchronous operation (e.g., API call)
    setTimeout(() => {
      // Set showLoading back to false and showModelDetail to true when the operation is complete
      setShowLoading(false);
      setShowModelDetail(true);
    }, 2500); // Adjust the timeout as needed
  };

  useEffect(() => {
    // Clean up when component unmounts
    return () => {
      setShowLoading(false);
    };
  }, []);

  return (
    <Router>
      <Navbar expand="lg" className="custom-navbar-bg">
        <Container>
          <Navbar.Brand href="#home" className="custom-brand-text">
            AI Models
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <button className="btn btn-primary btn-spaceship" onClick={handleWhatsTrendingClick}>
              <span role="img" aria-label="Rocket">🚀</span> What's Trending!
            </button>
            <button className="btn btn-primary btn-explore" onClick={() => window.open('/explore', '_blank')}>
              <span role="img" aria-label="Globe">🌎</span> Explore
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      {/* Conditional rendering: show either the ModelDetailPage, LoadingPage, or Home component */}
      <Routes>
        <Route path="/" element={showLoading ? <LoadingPage /> : (showModelDetail ? <ModelDetailPage /> : <Home />)} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/" element={<Home />} />
        <Route path="/model/:id" element={<ModelDetail />} />
      </Routes>
    </Router>
  );
};

export default App;