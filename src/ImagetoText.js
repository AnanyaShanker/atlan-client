// ImageToText.js
import React, { useState } from 'react';

const ImageToText = ({ onImageConvert }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [convertedText, setConvertedText] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleConvertClick = async () => {
    if (selectedImage) {
      try {
        const textResult = await onImageConvert(selectedImage);
        setConvertedText(textResult);
      } catch (error) {
        console.error('Error converting image to text:', error);
      }
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

      {convertedText && (
        <div className="converted-text-container">
          <h3>Converted Text:</h3>
          <p>{convertedText}</p>
        </div>
      )}
    </div>
  );
};

export default ImageToText;
