// home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import backgroundImage from './images/galaxy.jpg';

const Home = () => {
  const [cardData, setCardData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fetch data from your API
    axios.get('https://my-json-server.typicode.com/AnanyaShanker/atlan-client/models')
      .then(response => {
        console.log(response.data); // Log the API response
        setCardData(response.data);
        setLoaded(true);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className={`card-container ${loaded ? 'loaded' : ''}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
      {cardData.map((card, index) => (
        <Card key={index} style={{ width: '350px', height: '200px', margin: '20px' }} className="custom-card">
          <Card.Body className="d-flex flex-column align-items-center justify-content-center">
            <Card.Title className="text-center">{card.name}</Card.Title>
            <Card.Text className="text-center">{card.description}</Card.Text>
            <button className="btn btn-primary">Read More</button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Home;
