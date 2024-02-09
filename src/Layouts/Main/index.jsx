import React from 'react';
import '../../Assets/Styles/Quote.css';

import Header from '../../Components/QuoteComponents/Header';
import getRandomQuote from '../../Components/QuoteComponents/Quote';  // Import the function, not the component

const Main = () => {
  // Example usage
  const quoteOfTheDay = getRandomQuote();
  console.log(quoteOfTheDay);

  return (
    <div className="main">
      <Header />
      <div className="quote-section">
        <p className='quote-text'>{quoteOfTheDay}</p>laladsa
        {/* Any other components or content can go here */}
      </div>
    </div>
  );
};

export default Main;
