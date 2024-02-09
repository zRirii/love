import React from 'react';
import ReactPlayer from 'react-player';

const BackgroundMusic = () => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=1bowtr9kt-M"
      playing={true}
      loop={true}
      volume={0.5} 
      width="0"
      height="0"
    />
  );
};

export default BackgroundMusic;
