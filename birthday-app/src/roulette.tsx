import React, { useState } from 'react';
import './App.css';
import { Wheel } from 'react-custom-roulette'
import { useNavigate, useLocation } from 'react-router-dom';



const Roulette: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const date = location.state;

  const data = [
    { option: 'Japanese' },
    { option: 'Vietnamese' },
    { option: 'Chinese' },
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
            <h1>Send it to the gods</h1>
              <Wheel
                mustStartSpinning={mustSpin}
                prizeNumber={prizeNumber}
                data={data}
                onStopSpinning={() => {
                  setMustSpin(false);
                  setRouletteSpun(true);
                }}
                spinDuration={0.05}
              />
              <div className="button-container">
                <button 
                  onClick={handleSpin}
                  className="button"
                  >
                    Spin Me!
                </button>
                {rouletteSpun && (
                <button 
                  className="button"
                  onClick={ () => navigate("/japanese", { state: date}) }
                  >
                  Let's go!
                </button>
                )}
              </div>
              { rouletteSpun && (
                <p >
                  Splendid choice - I love Japanese as well!
                </p>
                )
              }
        </header>
    </div>
  );
};

export default Roulette;