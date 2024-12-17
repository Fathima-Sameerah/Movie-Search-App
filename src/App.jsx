import React from 'react';
import myLogo from './assets/logo.png'; // Replace with the path to your logo
import './App.css';
import MovieSearch from './component/MovieSearch';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <div>
        <img src={myLogo} className="logo" alt="My Custom Logo" style={{ width: '270px', height: 'auto' }} />
      </div>

      {/* Title */}
      <h1>Welcome to My Movie App</h1>

      {/* Movie Search Component */}
      <div>
        <h2>Search your movie here!</h2>
        <MovieSearch />
      </div>
    </div>
  );
}

export default App;
