// ModelDetailPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ModelDetailPage.css';

const ModelDetailPage = () => {
  const [models, setModels] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/AnanyaShanker/atlan-client/models')
      .then(response => {
        setModels(response.data);
        setIsLoaded(true);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to sort models based on the chosen criteria
  const sortModels = (criteria) => {
    let sortedModels = [...models];
    if (criteria === 'favorites') {
      sortedModels = sortedModels.sort((a, b) => b.favorites - a.favorites);
    } else if (criteria === 'views') {
      sortedModels = sortedModels.sort((a, b) => b.views - a.views);
    }
    setModels(sortedModels);
    setSortBy(criteria);
  };

  return (
    <div className={`model-detail-page ${isLoaded ? 'loaded' : ''}`}>
      <h2>Featured Models</h2>
      <div className="sort-buttons">
        <button onClick={() => sortModels('favorites')}>Developers Most Liked</button>
        <button onClick={() => sortModels('views')}>Developers Most Viewed</button>
      </div>
      {models.map((model, index) => (
        <div key={index} className="model-card">
          <h3>{model.name}</h3>
          <p>{model.description}</p>
          <p>Views: {model.views}</p>
          <p>Likes: {model.favorites}</p>
        </div>
      ))}
      {sortBy && <p>Sorted by: {sortBy}</p>}
    </div>
  );
};

export default ModelDetailPage;
