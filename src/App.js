// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import Home from './Home';
import Explore from './Explore';
import TryItOut from './TryItOut';
import ImagetoText from './ImagetoText'; // Update import
import LoadingPage from './LoadingPage';
import ModelDetail from './ModelDetail';
import ModelDetailPage from './ModelDetailPage';
import Footer from './Footer'; 
import './App.css';

const App = () => {
  const [showModelDetail, setShowModelDetail] = React.useState(false);
  const [showLoading, setShowLoading] = React.useState(false);

  const handleWhatsTrendingClick = () => {
    console.log("clicked");
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
      setShowModelDetail(true);
    }, 2500);
  };

  const handleImageConvert = async (image) => {
    // Simulating a delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Return dummy text as a placeholder for image conversion
    return "This is the converted text from the image. Check the console";
  };

  return (
    <Router>
      <Navbar expand="lg" className="custom-navbar-bg">
        <Container>
          <Navbar.Brand href="/" className="custom-brand-text">
            AI MODELS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
          <Navbar.Collapse id="basic-navbar-nav">
            <button className="btn btn-whats-trending" onClick={handleWhatsTrendingClick}>
              <span role="img" aria-label="Rocket">🚀</span> What's Trending!
            </button>
            <button className="btn btn-explore" onClick={() => window.location.href = '/explore'}>
              <span role="img" aria-label="Globe">🌎</span> Explore
            </button>
            <button className="btn btn-try-it-out" onClick={() => window.location.href = '/try-it-out-page'}>
              <span role="img" aria-label="Magnifying Glass">🔎</span> Try It Out
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={showLoading ? <LoadingPage /> : (showModelDetail ? <ModelDetailPage /> : <Home />)} />
        <Route path="/explore" element={showLoading ? <LoadingPage /> : (showModelDetail ? <ModelDetailPage /> : <Explore />)} />
        <Route path="/try-it-out-page" element={showLoading ? <LoadingPage /> : (showModelDetail ? <ModelDetailPage /> : <TryItOut />)} />
        <Route path="/image-to-text" element={<ImagetoText onImageConvert={handleImageConvert} />} /> {/* Ensure onImageConvert is passed */}
        <Route path="/model/:id" element={showLoading ? <LoadingPage /> : (showModelDetail ? <ModelDetailPage /> : <ModelDetail />)} />
        <Route path="/model-detail" element={showLoading ? <LoadingPage /> : (showModelDetail ? <ModelDetailPage /> : <ModelDetailPage />)} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer /> {/* Include the Footer component */}
    </Router>
  );
};

export default App;
