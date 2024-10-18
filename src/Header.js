import React from 'react';
import "./App.css"; // Import your CSS file

const Header = () => {
  return (
    <header className="header">
    <img 
      src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-outline-512.png" 
      alt="Logo" 
      className="logo" 
    />
    <nav className="nav">
      <a href="/Home">Home</a>
      <a href="/About">About</a>
    </nav>
  </header>
  );
};

export default Header;