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
    navigate('/birthday-app/cuisine', { state: date });
  };

  return (
    <div>
        <header className="App-header">
            <h1 >Thank you for consenting ... now, when are you free?</h1>
            <Calendar onClickDay={handleDate} value={selectedDate}/>
        </header>
    </div>
  );
};

export default Date;