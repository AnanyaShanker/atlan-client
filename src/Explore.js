// Explore.js
import React, { useState } from 'react';
import './Explore.css';


const Explore = () => {
  const [formData, setFormData] = useState({
    modelName: '',
    description: '',
    providerName: '',
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
    setPublicPosts([...publicPosts, formData]);
    setFormData({
      modelName: '',
      description: '',
      providerName: '',
    });
  };

  return (
    <div>
      <h2 className="explore-heading">Upload Your Model Information</h2>
      <form onSubmit={handleSubmit} className="form-container">
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

        {/* Image within the form */}
        <img src="https://i.pinimg.com/564x/d7/a5/74/d7a5745218306f4e3543b279737fffa8.jpg" alt="Form Background" className="form-image" />

      </form>

      {/* "Explore Space" Displayed Separately */}
      <div>
        <h2 className="explore-subheading">Explore Space</h2>
      </div>

      {/* Display Public Posts */}
      <div>
        {publicPosts.map((post, index) => (
          <div key={index} className="submitted-info-box">
            <h3>{post.modelName}</h3>
            <p>Description: {post.description}</p>
            <p>Provider: {post.providerName}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
