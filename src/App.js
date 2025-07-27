import React, { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [images, setImages] = useState([]);

  const generateImage = () => {
    const newImage = {
      url: `https://via.placeholder.com/300x200.png?text=${encodeURIComponent(prompt)}`,
      timestamp: Date.now(),
      prompt
    };
    setImages(prev => [newImage, ...prev]);
    setPrompt('');
  };

  const deleteImage = (timestamp) => {
    setImages(prev => prev.filter(img => img.timestamp !== timestamp));
  };

  return (
    <div className="app">
      <h1>🧠 AI Graphic Designer</h1>
      <p>Create mock images by entering a prompt below (demo only)</p>
      <div className="input-section">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your creative prompt here..."
        />
        <button onClick={generateImage}>Generate</button>
      </div>
      <div className="gallery">
        {images.map((img) => (
          <div className="image-card" key={img.timestamp}>
            <img src={img.url} alt="Generated" />
            <p>{img.prompt}</p>
            <a href={img.url} download={`ai-graphic-${img.timestamp}.png`}>Download</a>
            <button onClick={() => deleteImage(img.timestamp)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

