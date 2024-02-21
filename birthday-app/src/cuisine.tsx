import React from 'react';
import './App.css';
import japan from './japan-pic.png';
import { useNavigate, useLocation } from 'react-router-dom';

const Cuisine: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const date = location.state;

  return (
    <div>
        <header className="App-header">
            <h1>Pick cuisine</h1>
            <div className="button-container">
              <div className="rest-container">
                <img src={japan} alt="Japan" />
                <h2>Japanese</h2>
              </div>
              <div className="rest-container">
                <h2>Other</h2>
              </div>
            </div>
            <button 
                className='button'
                onClick={ () => navigate("/roulette", { state: date})}
                >
                  Roll the dice!
            </button>
        </header>
    </div>
  );
};

export default Cuisine;