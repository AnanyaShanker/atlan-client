import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
import './App.css';

const ModelDetail = () => {
  const { id } = useParams(); // Retrieve the id from the URL
  const [modelData, setModelData] = useState(null);

  useEffect(() => {
    // Fetch the specific model data using the id
    axios.get(`https://my-json-server.typicode.com/AnanyaShanker/atlan-client/models/${id}`, {
      maxContentLength: 2000000, // Set an appropriate value based on your needs
    })
      .then(response => {
        console.log(response.data); // Log the specific model data
        setModelData(response.data);
      })
      .catch(error => {
        console.error('Error fetching model data:', error);
      });
  }, [id]);

  const copyCodeToClipboard = () => {
    // Create a textarea element to copy the code
    const textArea = document.createElement('textarea');
    textArea.value = modelData.code;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  };

  // Render loading state while fetching data
  if (!modelData) {
    return <div>Loading...</div>;
  }

  // Split potential use cases into an array of lines
  const potentialUseCasesLines = modelData.potential_use_cases.split('\n');

  return (
    <div className="custom-model-detail-container">
      <Link to="/" className="back-button">Back</Link> {/* Add Back button */}
      <h2 className="custom-model-detail-title">{modelData.name}</h2>
      <img src={modelData.image_url} alt={modelData.name} className="model-image" />

      <p className="custom-model-detail-description">Description: {modelData.model_description}</p>
      <p className="custom-model-detail-provider">Provider: {modelData.provider}</p>
      <p className="custom-model-detail-code">
        <strong>Code:</strong>
        <button onClick={copyCodeToClipboard}>Copy</button>
        <pre>{modelData.code}</pre>
      </p>
      <p className="custom-model-detail-potential-use-cases">
         Potential Use Cases:
        {potentialUseCasesLines.map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>

      {/* Add other fields as needed */}
    </div>
  );
};

export default ModelDetail;
