import React from "react";
import "./App.css"; // Import your CSS file
import Header from './Header'; // Use relative path with './'
import MainContent from './MainContent'; // Use relative path with './'
import Description from './Description'; // Use relative path with './'
import Footer from './Footer'; // Use relative path with './'
import Greetings from './Greetings'; // Use relative path with './'

export default function App() {
  return (
    <div>
      <Header/>
      <Greetings user = "ramber"/>
      <MainContent />
      <Description />
      <Footer />
    </div>
  );
}