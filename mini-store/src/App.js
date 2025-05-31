// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      {/* <Login/> */}
      <Navbar />
      <Home />

      <Profile/>
    </div>
  );
}

export default App;