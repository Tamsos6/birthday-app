import React from 'react';
import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Cuisine: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  console.log(data);

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
            <p>
              {data.toString()}
            </p>
        </header>
    </div>
  );
};

export default Cuisine;