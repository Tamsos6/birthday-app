import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });

  const handleHover = () => {
    const x = Math.random() * 300;
    const y = Math.random() * 300;
    setButtonPosition({ top: y, left: x });
  };

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          hello world
        </h1>
        <div className ="button-container">
          <button className="button"
          onClick={ () => navigate("/date")}
            >
            Lets Gaur!</button>
          <button className="button"
            onMouseOver={handleHover}
            onClick={handleHover}
            style={{ top: `${buttonPosition.top}px`, left: `${buttonPosition.left}px`, position : 'relative'}}
            >
              Yeah Naur!
          </button>
        </div>
      </header>
    </div>
  );
}

export default Home;