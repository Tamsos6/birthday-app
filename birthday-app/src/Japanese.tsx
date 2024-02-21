import React, { useState } from 'react';
import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';


const Japanese: React.FC = () => {
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState<string | null>(null);

  const location = useLocation();
  const date = location.state;

  const handleRestaurant = (selectedRestaurant: string) => {
    setRestaurant(selectedRestaurant);
    const combinedState = { selectedRestaurant, date}
    navigate('/final', { state: combinedState });
    // console.log(combinedState);
  };
  
  return (
    <div>
        <header className="App-header">
            <h1>Japanese</h1>
          <div className="button-container">
            <div className="rest-container">
              <p>Ito Restaurant - Surry Hills</p>
              <button className="button" onClick={ () => handleRestaurant("Ito Restaurant")} >
                This option
              </button>
            </div>
            <div className="rest-container">
              <p>Jazzushi - Surry Hills</p>
              <button className="button" onClick={ () => handleRestaurant("Jazzushi")} >
                This option
              </button>
            </div>
          </div>
        </header>
    </div>
  );
};

export default Japanese;






// 1. <Jap> - ito , jazzushi
// 2. <Australian> - nomad, gidley
// 2. <Korean>
// 4. White - leo (Italian), warike, franca, rockpool bar and grill
