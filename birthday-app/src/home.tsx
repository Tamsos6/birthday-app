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
          hello world
        </p>
        <div className ="button-container">
          <button className="button">Lets Gaur!</button>
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



  // const resetButton = () => {
  //   setButtonPosition(initialPosition);
  // };

  // useEffect(() => {
  //   resetButton();
  // }, []);