import React, { useState } from 'react';
import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';
import leo from './assets/leo.png';
import franca from './assets/franca.png';
import armorica from './assets/armorica.png';
import lana from './assets/lana.png';


const European: React.FC = () => {
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
            <h1>European</h1>
          <div className="button-container" style={{ display: "flex", justifyContent: "space-around", width: "60%", textAlign: "center" }}>
            <div className="rest-container">
              <h3>Restaurant Leo - Wynyard</h3>
              <img src={leo} alt="Asian" className="cuisine-image" style={{ width: "100px", height: "auto", paddingBottom: "30px" }} onClick={() => window.open("https://www.restaurantleo.com.au/", "_blank")} />
              <button className="button" onClick={ () => handleRestaurant("Restaurant Leo")} >
                Select Me!
              </button>
            </div>
            <div className="rest-container">
              <h3>Franca - Potts Point</h3>
              <img src={franca} alt="Asian" className="cuisine-image" style={{ width: "230px", height: "auto", paddingBottom: "30px" }} onClick={() => window.open("https://francabrasserie.com.au/", "_blank")} />
              <button className="button" onClick={ () => handleRestaurant("Franca")} >
                Select Me!
              </button>
            </div>
            <div className="rest-container">
              <h3>Armorica - Surry Hills</h3>
              <img src={armorica} alt="Asian" className="cuisine-image" style={{ width: "150px", height: "auto", paddingBottom: "30px" }} onClick={() => window.open("https://armorica.com.au/", "_blank")}/>
              <button className="button" onClick={ () => handleRestaurant("Armorica")} >
                Select Me!
              </button>
            </div>
            <div className="rest-container">
              <h3>Lana - Circular Quay</h3>
              <img src={lana} alt="Asian" className="cuisine-image" style={{ width: "100px", height: "auto", paddingBottom: "30px" }} onClick={() => window.open("https://lana.sydney/", "_blank")}/>
              <button className="button" onClick={ () => handleRestaurant("Lana")} >
                Select Me!
              </button>
            </div>
          </div>
        </header>
    </div>
  );
};

export default European;






// 1. <Jap> - ito , jazzushi
// 2. <Australian> - nomad, gidley
// 2. <Korean>
// 4. White - leo (Italian), warike, franca, rockpool bar and grill
