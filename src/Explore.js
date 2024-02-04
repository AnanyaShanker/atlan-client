// Explore.js
import React, { useState, useEffect } from 'react';
import './Explore.css';


const Explore = () => {
  const [modelInfo, setModelInfo] = useState({
    modelName: '',
    description: '',
    providerName: '',
    // Add other fields as needed
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModelInfo({
      ...modelInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the submission of model information (e.g., API call)
    console.log('Submitted Model Information:', modelInfo);
    // Reset the form after submission
    setModelInfo({
      modelName: '',
      description: '',
      providerName: '',
      // Reset other fields as needed
    });
  };

  
  return (
    <div>
      <h2 className="explore-heading">Upload Your Model Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="modelName">Model Name:</label>
          <input
            type="text"
            id="modelName"
            name="modelName"
            value={modelInfo.modelName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={modelInfo.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="providerName">Provider Name:</label>
          <input
            type="text"
            id="providerName"
            name="providerName"
            value={modelInfo.providerName}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add other fields as needed */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Explore;
