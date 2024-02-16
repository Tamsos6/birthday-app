import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';


const Cuisine: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div>
        <header className="App-header">
            <h1>Pick cuisine</h1>
            <button 
                className='button'
                onClick={ () => navigate("/roulette")}
                >
                  Pick for me!
            </button>
        </header>
    </div>
  );
};

export default Cuisine;