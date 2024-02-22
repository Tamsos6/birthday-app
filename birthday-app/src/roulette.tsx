import React, { useState } from 'react';
import './App.css';
import { Wheel } from 'react-custom-roulette'
import { useNavigate, useLocation } from 'react-router-dom';



const Roulette: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const date = location.state;

  const data = [
    { option: 'Asian' },
    { option: 'Australian' },
    { option: 'European' },
    { option: 'Other' }
  ];

  const [mustSpin, setMustSpin] = useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = useState<number>(0);
  const [rouletteSpun, setRouletteSpun] = useState<boolean>(false);

  const handleSpin = () => {
    const newPrizeNumber = 0;
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
    setRouletteSpun(false);
  };

  return (
    <div>
        <header className="App-header">
            <h1 style={{ paddingBottom: "0px"}}>Let the gods pick</h1>
              <Wheel
                backgroundColors={['#daeaf6', '#e8dff5', '#fcf4dd', '#ddedea']}
                outerBorderWidth={1}
                innerBorderWidth={1}
                radiusLineWidth={1}
                fontFamily='Nunito'
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                onStopSpinning={() => {
                  setMustSpin(false);
                  setRouletteSpun(true);
                }}
                spinDuration={0.05}
              />
              <div className="button-container" style={{ paddingTop: "40px"}}>
                <button 
                  onClick={handleSpin}
                  className="button"
                  >
                    Spin Me!
                </button>
                {rouletteSpun && (
                <button 
                  className="button"
                  onClick={ () => navigate("/Asian", { state: date}) }
                  >
                  Let's gaur!
                </button>
                )}
              </div>
              {/* { rouletteSpun && (
                <h2 style={{ paddingTop : "30px"}} >
                  Splendid choice - I love Asian cuisine as well!
                </h2>
                )
              } */}
        </header>
    </div>
  );
};

export default Roulette;