import React, { useEffect } from 'react';
import './App.css';
import { useNavigate, useLocation } from 'react-router-dom';


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
            <h1>Confirmed</h1>
            <p>
              {combinedState.selectedRestaurant}
            </p>
            <p>
              {combinedState.date.toString().split(" ").slice(0,3).join(" ")}
            </p>
        </header>
    </div>
  );
};

export default Final;






// 1. <Jap> - ito , jazzushi
// 2. <Australian> - nomad, gidley
// 2. <Korean>
// 4. White - leo (Italian), warike, franca, rockpool bar and grill
