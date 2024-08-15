import React, { useState } from 'react';
import './App.css';

declare global {
  interface Window {
    confetti: any;
  }
}

function App() {
  const [response, setResponse] = useState('');
  const [showLogo, setShowLogo] = useState(false);
  const [loading, setLoading] = useState(false);  // Add loading state

  const handlePingClick = () => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api';

    setLoading(true);  // Start loading
    fetch(`${apiUrl}/ping`)
      .then(res => res.json())
      .then(data => {
        setResponse(data.reply);
        triggerGlitter();
        setShowLogo(true);  // Show the LazyDocker logo after the click
        setLoading(false);  // Stop loading
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setLoading(false);  // Stop loading in case of an error
      });
  };

  const triggerGlitter = () => {
    window.confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button className="Ping-button" onClick={handlePingClick} disabled={loading}>
          {loading ? 'Loading...' : (response ? `PING👋: ${response}` : 'PING👋')}
        </button>
        {showLogo && (
          <img 
            src="https://user-images.githubusercontent.com/8456633/59972109-8e9c8480-95cc-11e9-8350-38f7f86ba76d.png" 
            className="App-logo fade-in"  // Add fade-in class
            alt="LazyDocker Logo" 
          />
        )}
        <a
          className="App-link"
          href="https://github.com/jesseduffield/lazydocker"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's have fun with LAZYDOCKER !!
        </a>
      </header>
    </div>
  );
}

export default App;
