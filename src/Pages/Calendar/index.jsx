import React from 'react';
import CountdownTimer from '../../Components/CountdownComponents/CountdownTimer';
import Header from '../../Components/CountdownComponents/Header'

const SpecialEventPage = () => {
  // Set the target date for your special event
  const targetDate = new Date('2024-02-14T00:00:00');

  return (
    <div className="main">
      <Header/>
      <CountdownTimer targetDate={targetDate} background="rgba(255, 255, 255, 0.1)" />
    </div>
  );
};

export default SpecialEventPage;