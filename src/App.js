import React from 'react';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import ImgMediaCard from './components/ImgMediaCard';
import "./styles/App.css"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <ImgMediaCard />

    </div>
  );
}

export default App;
