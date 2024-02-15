import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Home: React.FC = () => {
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  // const [initialPosition, setInitialPosition] = useState({ top: 0, left: 0 });

  const handleHover = () => {
    const x = Math.random() * 300;
    const y = Math.random() * 300;
    setButtonPosition({ top: y, left: x });
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Happy birthday! Let's go on a date night and get fat.
        </p>
        <div className ="button-container">
          <button className="button">Lets Gaur!</button>
          <button className="button"
            onMouseOver={handleHover}
            style={{ top: `${buttonPosition.top}px`, left: `${buttonPosition.left}px`, transition : 'transform 5s ease', position : 'relative'}}
            >
              Yeah Naur!
          </button>
        </div>
      </header>
    </div>
  );
}

export default Home;



  // const resetButton = () => {
  //   setButtonPosition(initialPosition);
  // };

  // useEffect(() => {
  //   resetButton();
  // }, []);