import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('white');

  const validUsernames = ['JSmith23', 'Loretta31', 'Kenneth57', 'Jonathan27', 'Abigail72', 'Dale81'];

  const handleLogin = () => {
    if (validUsernames.includes(username)) {
      setLoginStatus(`Welcome, ${username}`);
      setBackgroundColor('green');
    } else {
      setLoginStatus('User not found');
      setBackgroundColor('red');
    }
  };

  return (
    <div className="App" style={{ backgroundColor }}>
      <header className="App-header">
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p>{loginStatus}</p>
      </header>
    </div>
  );
}

export default App;
