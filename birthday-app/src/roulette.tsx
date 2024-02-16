import React, { useState } from 'react';
import './App.css';
import { Wheel } from 'react-custom-roulette'


const Roulette: React.FC = () => {
  const data = [
    { option: 'Japanese' },
    { option: 'Vietnamese' },
    { option: 'Chinese' },
  ];

  const [mustSpin, setMustSpin] = useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = useState<number>(0);

  const handleSpin = () => {
    const newPrizeNumber = 0;
    setPrizeNumber(newPrizeNumber);
    setMustSpin(true);
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
                }}
                spinDuration={0.05}
              />
              <button 
                onClick={handleSpin}
                className="button"
                >
                  Spin Me!
              </button>
        </header>
    </div>
  );
};

export default Roulette;