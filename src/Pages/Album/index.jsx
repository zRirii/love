import React, { useEffect, useState } from 'react';
import "../../Assets/Styles/Album.css";

const ImageGrid = () => {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const urls = [
      'https://i.pinimg.com/originals/57/de/b4/57deb4a1ac87a7e46a05fee76856ae58.jpg',
      'https://i.pinimg.com/originals/05/6f/8c/056f8c6e0db43ef8372e0eb118934564.jpg',
      'https://i.pinimg.com/originals/45/77/8a/45778a2410b1d16d427b2b93c99c5e01.jpg',
      'https://i.pinimg.com/736x/31/10/88/311088ff937ae1f940053e58bd5343f9.jpg',
      'https://i.pinimg.com/736x/f2/44/11/f244113434a872064965615e62ac401f.jpg',

      
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
    <div class="grid-container">
  {imageUrls.map((imageUrl, index) => (
    <div class="grid-item" key={index}>
      <img class="image" src={imageUrl} alt="" />
    </div>
  ))}
</div>
  );
};

export default ImageGrid;