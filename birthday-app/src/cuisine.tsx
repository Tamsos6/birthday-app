import React from 'react';
import './App.css';
import asian from './assets/asian.gif';
import australian from './assets/australian.gif';
import european from './assets/european.gif';
import other from './assets/other.gif';
import { useNavigate, useLocation } from 'react-router-dom';

const Cuisine: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const date = location.state;

  return (
    <div>
        {/* <header className="App-header"> */}
        <header className="App-header">
            <h1 style={{ paddingBottom: "80px" }}>Pick cuisine!</h1>
            <div className="button-container">
              <div className="rest-container">
                <img src={australian} alt="australian" className="cuisine-image" onClick={ () => navigate("/Australian", { state: date}) }/>
                <h2>Australian</h2>
              </div>
              <div className="rest-container">
                <img src={asian} alt="Asian" className="cuisine-image" onClick={ () => navigate("/Asian", { state: date}) }/>
                <h2>Asian</h2>
              </div>
              <div className="rest-container">
                <img src={european} alt="european" className="cuisine-image" onClick={ () => navigate("/European", { state: date}) }/>
                <h2>European</h2>
              </div>
              <div className="rest-container">
                <img src={other} alt="other" className="cuisine-image" style={{ paddingLeft : "60px"}} onClick={ () => navigate("/Other", { state: date}) }/>
                <h2 style={{ paddingLeft : "60px"}}>Other</h2>
              </div>
            </div>
            <button
                className='button'
                onClick={ () => navigate("/roulette", { state: date})}
                style={{ fontSize : "20px", height : "80px", width : "180px" }}
                >
                  I Dont Knaur!
            </button>
        </header>
    </div>
  );
};

export default Cuisine;