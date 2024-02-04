// ModelDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ModelDetail.css';

const ModelDetail = () => {
  const { id } = useParams(); // Retrieve the id from the URL
  const [modelData, setModelData] = useState(null);

  useEffect(() => {
    // Fetch the specific model data using the id
    axios.get(`https://my-json-server.typicode.com/AnanyaShanker/atlan-client/models/${id}`)
      .then(response => {
        console.log(response.data); // Log the specific model data
        setModelData(response.data);
      })
      .catch(error => {
        console.error('Error fetching model data:', error);
      });
  }, [id]);

  // Render loading state while fetching data
  if (!modelData) {
    return <div>Loading...</div>;
  }

  // Split potential use cases into an array of lines
  const potentialUseCasesLines = modelData.potential_use_cases.split('\n');

  return (
    <div className="custom-model-detail-container">
      <h2 className="custom-model-detail-title">{modelData.name}</h2>
      <img src={modelData.image_url} alt={modelData.name} className="model-image" />

      <p className="custom-model-detail-description">Description: {modelData.model_description}</p>
      <p className="custom-model-detail-provider">Provider: {modelData.provider}</p>
      <p className="custom-model-detail-code">
        <strong>Code:</strong>
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
