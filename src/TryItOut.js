import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
//import ImagetoText from './ImagetoText';

const TryItOut = () => {
    const [availableModels, setAvailableModels] = useState([]);
    const [selectedModel, setSelectedModel] = useState('');
    const [modelOutput, setModelOutput] = useState('');
  
    const navigate = useNavigate();


 

  // Fetch available models from the API
  useEffect(() => {
    // Replace 'your-api-endpoint' with the actual endpoint for fetching model names
    fetch('https://my-json-server.typicode.com/AnanyaShanker/atlan-client/models')
      .then(response => response.json())
      .then(data => {
        console.log('API Response:', data);
        setAvailableModels(data || []);
      })
      .catch(error => console.error('Error fetching models:', error));
  }, []);

  // Function to handle model selection change
  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const handleTryItOutClick = () => {
    // Check if a model is selected
    if (selectedModel) {
      // Use navigate to navigate to the desired page
      navigate('/try-it-out');
    }
  };

  // Function to handle image conversion output
  const handleImageConvert = (selectedImage) => {
    // Simulate an API call to the backend for image-to-text conversion
    // Replace this with your actual API call
    // For now, just echo back a placeholder text
    setModelOutput('Model Output: This is some text from the image.');
  };

  return (
    <div className="try-it-out-container">
      <h2>Try It Out</h2>

      {/* Model selection dropdown */}
      <div>
        <label htmlFor="modelSelect">Select Model:</label>
        <select id="modelSelect" onChange={handleModelChange} value={selectedModel}>
          <option value="" disabled>Select a model</option>
          {availableModels.map(model => (
            <option key={model.id} value={model.name}>{model.name}</option>
          ))}
        </select>
      </div>

      {/* Button to trigger model interaction */}
      <button onClick={handleTryItOutClick}>Try It Out</button>

      {/* Display model output */}
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
