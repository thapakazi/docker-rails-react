import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/api';

    fetch(`${apiUrl}/ping`)
      .then(res => res.json())
      .then(data => setResponse(data.reply))
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://user-images.githubusercontent.com/8456633/59972109-8e9c8480-95cc-11e9-8350-38f7f86ba76d.png"
          className="App-logo"
          alt="LazyDocker Logo"
        />
        <p className="Ping-response">
          {response ? `PING👋: ${response}` : 'Loading...'}
        </p>
        <a
          className="App-link"
          href="https://github.com/jesseduffield/lazydocker"
          target="_blank"
          rel="noopener noreferrer"
        >
          lets have fun with LAZYDOCKER !!
        </a>
      </header>
    </div>
  );
}

export default App;
