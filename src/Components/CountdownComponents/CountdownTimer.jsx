import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../Assets/Styles/Calendar.css';

const CountdownTimer = ({ background }) => {
  const storedDate = localStorage.getItem('selectedDate');
  const initialDate = storedDate ? new Date(storedDate) : new Date();

  const [selectedDate, setSelectedDate] = useState(initialDate);
 

  const calculateTimeLeft = (targetDate) => {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(selectedDate));
  useEffect(() => {
    // Save the selected date to local storage on each change
    localStorage.setItem('selectedDate', selectedDate.toISOString());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(selectedDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedDate]);

  const addLeadingZero = (value) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div style={{ background: background, padding: '20px', borderRadius: '10px', color: 'white' }}>
      <h2 className='countdown-h2'>Countdown Timer</h2>
      <DatePicker selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
      <div className='countdown-span'>
        <span>{addLeadingZero(timeLeft.days)}</span> days{' '}
        <span>{addLeadingZero(timeLeft.hours)}</span> hours{' '}
        <span>{addLeadingZero(timeLeft.minutes)}</span> minutes{' '}
        <span>{addLeadingZero(timeLeft.seconds)}</span> seconds
      </div>
    </div>
  );
};

export default CountdownTimer;