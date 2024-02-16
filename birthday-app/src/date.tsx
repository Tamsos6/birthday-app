import React, { useState } from 'react';
import Calendar from 'react-calendar'
import './App.css';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';


const Date: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const navigate = useNavigate();


  const handleDate = (date: Date) => {
    setSelectedDate(date);
    navigate('/cuisine', { state: date });
  };

  return (
    <div>
        <header className="App-header">
            <h1>Hello, World!</h1>
            <Calendar onClickDay={handleDate} value={selectedDate}/>
        </header>
    </div>
  );
};

export default Date;