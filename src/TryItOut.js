import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TryItOut = () => {
  const [availableModels, setAvailableModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');
  const [modelOutput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch available models from the API
    fetch('https://my-json-server.typicode.com/AnanyaShanker/atlan-client/models')
      .then(response => response.json())
      .then(data => setAvailableModels(data || []))
      .catch(error => console.error('Error fetching models:', error));
  }, []);

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const handleTryItOutClick = () => {
    if (selectedModel) {
      // Navigate to the image-to-text page
      navigate('/image-to-text');
    }
  };

  return (
    <div className="try-it-out-container">
      <h2>Try It Out</h2>
      <div>
        <label htmlFor="modelSelect">Select Model:</label>
        <select id="modelSelect" onChange={handleModelChange} value={selectedModel}>
          <option value="" disabled>Select a model</option>
          {availableModels.map(model => (
            <option key={model.id} value={model.name}>{model.name}</option>
          ))}
        </select>
      </div>
      <button onClick={handleTryItOutClick}>Try It Out</button>
      {modelOutput && (
        <div className="model-output">
          <h3>Model Output:</h3>
          <p>{modelOutput}</p>
        </div>
      )}
    </div>
  );
};

export default TryItOut;