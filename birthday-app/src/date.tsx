import React from 'react';
import Calendar from 'react-calendar'
import './App.css';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';


const Date: React.FC = () => {
  // const handleDate = () => {

  // };

  const navigate = useNavigate();

  return (
    <div>
        <header className="App-header">
            <h1>Hello, World!</h1>
            <Calendar onClickDay={ () => navigate("/cuisine")} />
        </header>
    </div>
  );
};

export default Date;