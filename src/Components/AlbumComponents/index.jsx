import React, { useEffect, useState } from 'react';
import "../../Assets/Styles/Album.css";
import pavel1 from "../../Assets/Images/pavel/1.jpg";

import pavel3 from "../../Assets/Images/pavel/3.jpg";

import pavel5 from "../../Assets/Images/pavel/5.jpg";
import pavel6 from "../../Assets/Images/pavel/6.jpg";

import pavel10 from "../../Assets/Images/pavel/10.jpg";

import pavel12 from "../../Assets/Images/pavel/12.jpg";
import pavel13 from "../../Assets/Images/pavel/13.jpg";

import pavel15 from "../../Assets/Images/pavel/15.jpg";
import pavel16 from "../../Assets/Images/pavel/16.jpg";
import pavel17 from "../../Assets/Images/pavel/17.jpg";

import pavel19 from "../../Assets/Images/pavel/19.jpg";

import pavel21 from "../../Assets/Images/pavel/21.jpg";

import pavel23 from "../../Assets/Images/pavel/23.jpg";
import pavel24 from "../../Assets/Images/pavel/24.jpg";

import pavel26 from "../../Assets/Images/pavel/26.jpg";

import pavel29 from "../../Assets/Images/pavel/29.jpg";
import pavel30 from "../../Assets/Images/pavel/30.jpg";
import pavel31 from "../../Assets/Images/pavel/31.jpg";
import pavel32 from "../../Assets/Images/pavel/32.jpg";
import pavel33 from "../../Assets/Images/pavel/33.jpg";
import pavel34 from "../../Assets/Images/pavel/34.jpg";
import pavel35 from "../../Assets/Images/pavel/35.jpg";

import pavel39 from "../../Assets/Images/pavel/39.jpg";
import pavel40 from "../../Assets/Images/pavel/40.jpg";


const ImageGrid = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const urls = [
      'https://i.pinimg.com/originals/57/de/b4/57deb4a1ac87a7e46a05fee76856ae58.jpg',
      'https://i.pinimg.com/originals/05/6f/8c/056f8c6e0db43ef8372e0eb118934564.jpg',
      'https://i.pinimg.com/originals/45/77/8a/45778a2410b1d16d427b2b93c99c5e01.jpg',
      'https://i.pinimg.com/736x/31/10/88/311088ff937ae1f940053e58bd5343f9.jpg',
      'https://i.pinimg.com/736x/f2/44/11/f244113434a872064965615e62ac401f.jpg',
      'https://i.pinimg.com/736x/31/73/f4/3173f4d22f7937daf9121d221b4d0df9.jpg',
       
       `${pavel1}`,

       `${pavel3}`,

       `${pavel5}`,
       `${pavel6}`,

       `${pavel10}`,

       `${pavel12}`,
       `${pavel13}`,

       `${pavel15}`,
       `${pavel16}`,
       `${pavel17}`,

       `${pavel19}`,

       `${pavel21}`,

       `${pavel23}`,
       `${pavel24}`,

       `${pavel26}`,

       `${pavel29}`,
       `${pavel30}`,
       `${pavel31}`,
       `${pavel32}`,
       `${pavel33}`,
       `${pavel34}`,
       `${pavel35}`,

       `${pavel39}`,
       `${pavel40}`,


      
    ];

    // Shuffle the array using the Fisher-Yates algorithm
    const shuffledUrls = shuffleArray(urls);
    setImageUrls(shuffledUrls);
  }, []);

  // Function to shuffle the array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <div className="grid-container">
  {imageUrls.map((imageUrl, index) => (
    <div className="grid-item" key={index}>
      <img className="image" src={imageUrl} alt="" />
    </div>
  ))}
</div>
  );
};

export default ImageGrid;