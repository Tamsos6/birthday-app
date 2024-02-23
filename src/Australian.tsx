import React, { useState } from 'react';
import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';
import asian from './asian-pic.png';
import ito from './assets/ito.png';


const Australian: React.FC = () => {
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState<string | null>(null);

  const location = useLocation();
  const date = location.state;

  const handleRestaurant = (selectedRestaurant: string) => {
    setRestaurant(selectedRestaurant);
    const combinedState = { selectedRestaurant, date}
    navigate('/birthday-app/final', { state: combinedState });
    // console.log(combinedState);
  };
  
  return (
    <div>
        <header className="App-header">
            <h1>Asian</h1>
          <div className="button-container">
            <div className="rest-container">
              <p>Ito Restaurant - Surry Hills</p>
              <img src={ito} alt="Asian" className="cuisine-image"   onClick={() => window.location.href = "https://cdn.sanity.io/files/q60682qe/production/ff8ba178c0e1937f3cc659d0c2b5a37a5f6fcb96.pdf/ITO%20A%20la%20Carte%20Menu_January2024_online.pdf"} />
              <button className="button" onClick={ () => handleRestaurant("Ito Restaurant")} >
                This option
              </button>
            </div>
            <div className="rest-container">
              <p>Jazzushi - Surry Hills</p>
              <img src={asian} alt="Asian" className="cuisine-image"/>
              <button className="button" onClick={ () => handleRestaurant("Jazzushi")} >
                This option
              </button>
            </div>
            <div className="rest-container">
              <p>Jazzushi - Surry Hills</p>
              <img src={asian} alt="Asian" className="cuisine-image"/>
              <button className="button" onClick={ () => handleRestaurant("Jazzushi")} >
                This option
              </button>
            </div>
            <div className="rest-container">
              <p>Jazzushi - Surry Hills</p>
              <img src={asian} alt="Asian" className="cuisine-image"/>
              <button className="button" onClick={ () => handleRestaurant("Jazzushi")} >
                This option
              </button>
            </div>
          </div>
        </header>
    </div>
  );
};

export default Australian;






// 1. <Jap> - ito , jazzushi
// 2. <Australian> - nomad, gidley
// 2. <Korean>
// 4. White - leo (Italian), warike, franca, rockpool bar and grill
