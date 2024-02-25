import React, { useState } from 'react';
import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';
import warike from './assets/warike.png';
import nour from './assets/nour.png';


const Other: React.FC = () => {
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState<string | null>(null);

  const location = useLocation();
  const date = location.state;

  const handleRestaurant = (selectedRestaurant: string) => {
    setRestaurant(selectedRestaurant);
    const combinedState = { selectedRestaurant, date}
    navigate('/birthday-app/final', { state: combinedState });
  };
  
  return (
    <div>
        <header className="App-header">
            <h1>Other</h1>
          <div className="button-container" style={{ display: "flex", justifyContent: "space-around", width: "60%", textAlign: "center" }}>
            <div className="rest-container" style={{ width: "300px", marginBottom: "30px" }}>
              <h3>Warike - Surry Hills</h3>
              <img src={warike} alt="Asian" className="cuisine-image" style={{ width: "250px", height: "auto", paddingBottom: "30px" }} onClick={() => window.open("https://warikerestaurant.com/", "_blank")} />
              <button className="button" onClick={ () => handleRestaurant("Warike")} >
                Select Me!
              </button>
            </div>
            <div className="rest-container" style={{ width: "300px", marginBottom: "30px" }}>
              <h3>Nour - Surry Hills</h3>
              <img src={nour} alt="Asian" className="cuisine-image" style={{ width: "250px", height: "auto", paddingBottom: "30px" }} onClick={() => window.open("https://www.noursydney.com/", "_blank")} />
              <button className="button" onClick={ () => handleRestaurant("Nour")} >
                Select Me!
              </button>
            </div>
          </div>
        </header>
    </div>
  );
};

export default Other;






// 1. <Jap> - ito , jazzushi
// 2. <Australian> - nomad, gidley
// 2. <Korean>
// 4. White - leo (Italian), warike, franca, rockpool bar and grill
