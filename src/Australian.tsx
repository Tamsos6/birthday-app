import React, { useState } from 'react';
import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';
import nomad from './assets/nomad.png';
import gidley from './assets/gidley.png';
import arthur from './assets/arthur.png';


const Australian: React.FC = () => {
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
            <h1>Australian</h1>
          <div className="button-container" style={{ display: "flex", justifyContent: "space-around", width: "85%", textAlign: "center" }}>
            <div className="rest-container" style={{ paddingLeft: "0px"}}>
              <h3>Nomad - Surry Hills</h3>
              <img src={nomad} alt="Asian" className="cuisine-image" style={{ width: "150px", height: "auto", display: "block", margin: "auto", paddingBottom: "30px" }} onClick={() => window.open("https://nomad.sydney/", "_blank")} />
              <button className="button" onClick={ () => handleRestaurant("Nomad")} >
                Select Me!
              </button>
            </div>
            <div className="rest-container" style={{ paddingLeft: "200px"}}>
              <h3>Gidley - Surry Hills</h3>
              <img src={gidley} alt="Asian" className="cuisine-image" style={{ width: "150px", height: "auto", display: "block", margin: "auto", paddingBottom: "30px" }} onClick={() => window.open("https://www.liquidandlarder.com.au/venues/the-gidley/", "_blank")} />
              <button className="button" onClick={ () => handleRestaurant("Gidley")} >
                Select Me!
              </button>
            </div>
            <div className="rest-container" style={{ paddingLeft: "150px"}}>
              <h3>Arthur - Surry Hills</h3>
              <img src={arthur} alt="Asian" className="cuisine-image" style={{ width: "150", height: "auto", display: "block", margin: "auto", paddingBottom: "30px" }} onClick={() => window.open("https://www.arthurrestaurant.com/food-beverage", "_blank")}/>
              <button className="button" onClick={ () => handleRestaurant("Arthur")} >
                Select Me!
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
