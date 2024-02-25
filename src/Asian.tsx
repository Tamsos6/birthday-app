import React, { useState } from 'react';
import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';
import asian from './asian-pic.png';
import ito from './assets/ito.png';
import jazushi from './assets/jazushi.png';
import soul from './assets/soul.png';
import boy from './assets/boy.png';


const Asian: React.FC = () => {
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
            <h1>Asian</h1>
          <div className="button-container" style={{ display: "flex", justifyContent: "space-around", width: "60%", textAlign: "center" }}>
            <div className="rest-container">
              <h3>Ito Restaurant - Surry Hills</h3>
              <img src={ito} alt="Asian" className="cuisine-image" style={{ paddingBottom: "30px" }} onClick={() => window.open("https://www.itorestaurant.com/", "_blank")} />
              <button className="button" onClick={ () => handleRestaurant("Ito Restaurant")} >
                Select Me!
              </button>
            </div>
            <div className="rest-container">
              <h3>Jazushi - Surry Hills</h3>
              <img src={jazushi} alt="Asian" className="cuisine-image" style={{ paddingBottom: "30px" }} onClick={() => window.open("https://jazushi.squarespace.com/menu", "_blank")} />
              <button className="button" onClick={ () => handleRestaurant("Jazzushi")} >
                Select Me!
              </button>
            </div>
            <div className="rest-container">
              <h3>Kinh Boy - Barangaroo</h3>
              <img src={boy} alt="Asian" className="cuisine-image" style={{ paddingBottom: "30px" }} onClick={() => window.open("https://kinhboy.com.au/", "_blank")}/>
              <button className="button" onClick={ () => handleRestaurant("Kinh Boy")} >
                Select Me!
              </button>
            </div>
            <div className="rest-container">
              <h3>Soul Dining - Wynyard</h3>
              <img src={soul} alt="Asian" className="cuisine-image" style={{ paddingBottom: "30px" }} onClick={() => window.open("https://www.souldining.com.au/food-menu", "_blank")}/>
              <button className="button" onClick={ () => handleRestaurant("Soul Dining")} >
                Select Me!
              </button>
            </div>
          </div>
        </header>
    </div>
  );
};

export default Asian;






// 1. <Jap> - ito , jazzushi
// 2. <Australian> - nomad, gidley
// 2. <Korean>
// 4. White - leo (Italian), warike, franca, rockpool bar and grill
