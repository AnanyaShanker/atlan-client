import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import Home from './Home';
import Explore from './Explore.js';
import TryItOut from './TryItOut.js';
import ImagetoText from './ImagetoText.js';
import LoadingPage from './LoadingPage';
import ModelDetail from './ModelDetail.js';
import ModelDetailPage from './ModelDetailPage'; // Correct the import statement
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


    

    // Define the handleImageConvert function
    const handleImageConvert = (selectedImage) => {
      // Simulate an API call to the backend for image-to-text conversion
      // Replace this with your actual API call
      // For now, just echo back a placeholder text
      console.log('Image converted:', selectedImage);
    };

    const handleTryItOutClick = () => {
      // Open a new tab with the TryItOut component
      window.open('/try-it-out', '_blank');
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
      <Navbar.Brand href="/" className="custom-brand-text">
        AI Models
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <button className="btn btn-whats-trending" onClick={handleWhatsTrendingClick}>
          <span role="img" aria-label="Rocket">🚀</span> What's Trending!
        </button>

        <button className="btn btn-explore" onClick={() => window.open('/explore', '_blank')}>
          <span role="img" aria-label="Globe">🌎</span> Explore
        </button>

        <button className="btn btn-try-it-out" onClick={handleTryItOutClick}>
          <span role="img" aria-label="Magnifying Glass">🔎</span> Try It Out
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
        <Route path="/image-to-text" element={<ImagetoText onImageConvert={handleImageConvert} />} />
        <Route path="/model-detail" element={<ModelDetailPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/try-it-out" element={<TryItOut />} />
      </Routes>

      </Router>
    );
  };

  export default App;
