import React, { useState } from 'react';
import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';
import asian from './asian-pic.png';
import ito from './assets/ito.png';
import jazushi from './assets/jazushi.png';
import radio from './assets/radio.png';
import firepop from './assets/firepop.png';


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
              <h3>Firepop - Enmore</h3>
              <img src={firepop} alt="Asian" className="cuisine-image" style={{ paddingBottom: "30px" }} onClick={() => window.open("https://www.firepop.com.au/menu", "_blank")}/>
              <button className="button" onClick={ () => handleRestaurant("Firepop")} >
                Select Me!
              </button>
            </div>
            <div className="rest-container">
              <h3>Island Radio - Redfern</h3>
              <img src={radio} alt="Asian" className="cuisine-image" style={{ paddingBottom: "30px" }} onClick={() => window.open("https://www.islandradio.sydney/menu", "_blank")}/>
              <button className="button" onClick={ () => handleRestaurant("Island Radio")} >
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
