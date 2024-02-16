import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';


const Japanese: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div>
        <header className="App-header">
            <h1>Japanese</h1>
        </header>
    </div>
  );
};

export default Japanese;