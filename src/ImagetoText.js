// ImageToText.js

import React, { useState } from 'react';

const ImagetoText = ({ onImageConvert }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [convertedText, setConvertedText] = useState('');
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleConvertClick = async () => {
    if (selectedImage) {
      try {
        console.log("Converting image...");
        const textResult = await onImageConvert(selectedImage);
        console.log("Conversion successful!");
        setConvertedText(textResult);
        setError(null);
      } catch (error) {
        console.error('Error converting image to text:', error);
        setError(error.message);
      }
    } else {
      console.error('No image selected.');
      setError('Please select an image.');
    }
  };
  

  return (
    <div className="image-to-text-container">
      <h2>Image to Text</h2>
      <div>
        <label htmlFor="imageUpload">Upload Image:</label>
        <input type="file" id="imageUpload" accept="image/*" onChange={handleImageChange} />
      </div>
      <button onClick={handleConvertClick}>Convert Image to Text</button>

      {error && (
        <div className="error-container">
          <p className="error-message">{error}</p>
        </div>
      )}

      {convertedText && (
        <div className="converted-text-container">
          <h3>Converted Text:</h3>
          <p>{convertedText}</p>
        </div>
      )}
    </div>
  );
};

export default ImagetoText;
