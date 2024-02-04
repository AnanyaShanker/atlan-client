// Explore.js
import React, { useState, useEffect } from 'react';
import './Explore.css';

const Explore = () => {
  const [formData, setFormData] = useState({
    modelName: '',
    description: '',
    providerName: '',
    // Remove providerDescription field
  });

  const [publicPosts, setPublicPosts] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the submission of information (e.g., API call)
    console.log('Submitted Information:', formData);
    // Add the submitted info to the public posts
    setPublicPosts([...publicPosts, formData]);
    // Reset the form after submission
    setFormData({
      modelName: '',
      description: '',
      providerName: '',
      // Remove providerDescription from the reset state
    });
  };

  return (
    <div>
      <h2 className="explore-heading">Upload Your Model Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Model Information Fields */}
        <div>
          <label htmlFor="modelName">Model Name:</label>
          <input
            type="text"
            id="modelName"
            name="modelName"
            value={formData.modelName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Model Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Provider Information Fields */}
        <div>
          <label htmlFor="providerName">Provider Name:</label>
          <input
            type="text"
            id="providerName"
            name="providerName"
            value={formData.providerName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {/* Display Public Posts */}
      <div>
        <h2 className="explore-heading">Explore Space</h2>
        {publicPosts.map((post, index) => (
          <div key={index} className="public-post">
            <h3>{post.providerName}</h3>
            <p>{post.description}</p>
            {/* Add other fields as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
