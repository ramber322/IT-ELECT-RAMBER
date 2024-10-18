import React from 'react';
import "./App.css"; // Import your CSS file

const MainContent = () => {
  return (
    <>
     
      <div className="main-content">
        <div className="box-container">
          <div className="box"></div>
          <span className="box-label">TITLE </span>
          <span className="box-label"><img 
      src="https://cdn-icons-png.flaticon.com/512/276/276020.png" 
      alt="Logo" 
      className="star" 
    /></span>
        </div>
        <div className="box-container">
          <div className="box"></div>
          <span className="box-label">TITLE </span>
          <span className="box-label"><img 
      src="https://cdn-icons-png.flaticon.com/512/276/276020.png" 
      alt="Logo" 
      className="star" 
    /></span>
        </div>
        <div className="box-container">
          <div className="box"></div>
          <span className="box-label">TITLE </span>
          <span className="box-label"><img 
      src="https://cdn-icons-png.flaticon.com/512/276/276020.png" 
      alt="Logo" 
      className="star" 
    /></span>
        </div>
      </div>
    </>
  );
};

export default MainContent;