// Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import backgroundImage from './images/space_11.webp';
import './Home.css'; // Import a dedicated CSS file for the home page

const Home = () => {
  const [cardData, setCardData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fetch data from your API
    axios.get('https://my-json-server.typicode.com/AnanyaShanker/atlan-client/models')
      .then(response => {
        console.log(response.data);
        setCardData(response.data);
        setLoaded(true);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Apply the 'home-page' class to the body element
    document.body.classList.add('home-page');

    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <div className={`card-container ${loaded ? 'loaded' : ''}`}>
      {cardData.map((card, index) => (
        <Card key={index} style={{ width: '350px', height: '200px', margin: '20px' }} className="custom-card">
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <Card.Title className="text-center">{card.name}</Card.Title>
            <Card.Text className="text-center">{card.description}</Card.Text>
            <Link to={`/model/${card.id}`} className="btn btn-primary" >Read More</Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;
