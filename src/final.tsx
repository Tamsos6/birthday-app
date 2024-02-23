import React, { useEffect } from 'react';
import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';
import couple from './couple-pic.jpg';


const Final: React.FC = () => {
  const location = useLocation();
  const combinedState = location.state;
  
  useEffect(() => {
    if (combinedState) {
      const { selectedRestaurant, date } = combinedState;
      console.log("here it is")
      console.log(selectedRestaurant, date);
    }
  }, [combinedState]);


	return (
    <div>
        <header className="App-header">
            <h1 style={{ paddingBottom: "1px" }}>Confirmed</h1>
            <h2 style={{ paddingBottom: "50px" }}>
              See you at {combinedState.selectedRestaurant} on {combinedState.date.toString().split(" ").slice(0,3).join(" ")}!
            </h2>
            <img src={couple} style={{ width: "25%", height: "auto" }} alt="couple" />
        </header>
    </div>
  );
};

export default Final;






// 1. <Jap> - ito , jazzushi
// 2. <Australian> - nomad, gidley
// 2. <Korean>
// 4. White - leo (Italian), warike, franca, rockpool bar and grill
