// Function to get a random quote
const getRandomQuote = () => {
    const quotes = [
      "“In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.” — Maya Angelou",
      "“I hope it’s okay if I love you forever.” — Ally Maine, “A Star Is Born” ",
      "“Nobody has ever measured, even poets, how much a heart can hold.” — Zelda Fitzgerald",
      "“For it was not into my ear you whispered, but into my heart. It was not my lips you kissed, but my soul.” ― Judy Garland",
      "“Love makes your soul crawl out from its hiding place.” — Zora Neale Hurston",
      "“If I had a flower for every time I thought of you...I could walk through my garden forever.” — Alfred Tennyson, “Queen Mary” ",
      "“If you remember me, then I don’t care if everyone else forgets.” ― Haruki Murakami, “Kafka on the Shore”",
      "“If you find someone you love in your life, then hang on to that love.” — Princess Diana",
      "“You are my greatest adventure.” — Mr. Incredible, “The Incredibles”",
      "“I like you very much, just as you are.” — Mark Darcy, “Bridget Jones’s Diary”",
      "“You had me at ‘hello.’” — Dorothy Boyd, “Jerry Maguire”",
      "“What do you want? You want the moon? Just say the word and I’ll throw a lasso around it and pull it down.” ― George Bailey, “It’s A Wonderful Life”",
      "“When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.” — Harry Burns, “When Harry Met Sally”",
      "“I’m just a girl, standing in front of a boy, asking him to love her.” — Anna Scott, “Notting Hill” ",
      "“The heart is not like a box that gets filled up; it expands in size the more you love.” — Samantha, “Her” ",
      "“That moment, when you kiss someone and everything around becomes hazy and the only thing in focus is you and this person and you realize that that person is the only person that you’re supposed to kiss for the rest of your life.” — Josie Geller, “Never Been Kissed”",
      "“To me, you are perfect.” — Mark, “Love Actually”",
      "“I’m scared of walking out of this room and never feeling the rest of my whole life the way I feel when I’m with you.” — Baby Houseman, “Dirty Dancing”",
      "“I fell in love the way you fall asleep: slowly, and then all at once.” — John Green, “The Fault in Our Stars”",
      "“You should be kissed and often, and by someone who knows how.” ― Margaret Mitchell, “Gone with the Wind”",
      "“Love is not just looking at each other, it’s looking in the same direction.” ― Antoine de Saint-Exupéry, “Wind, Sand and Stars”",
      "“Who, being loved, is poor? Oh, no one. I hate my riches. They are a burden...” ― Oscar Wilde, “A Woman of No Importance”",
      "“In case you ever foolishly forget: I am never not thinking of you.” ― Virginia Woolf, “Selected Diaries”",
      "“I am nothing special, of this I am sure. I am a common man with common thoughts and I’ve led a common life. There are no monuments dedicated to me and my name will soon be forgotten, but I’ve loved another with all my heart and soul, and to me, this has always been enough..” ― Nicholas Sparks, “The Notebook”",
      "“I wish you to know you have been the last dream of my soul.” — Charles Dickens, “A Tale of Two Cities”",
      "“You are my heart, my life, my one and only thought.” ― Arthur Conan Doyle, “The White Company”",
      "“My heart is, and always will be, yours.” ― Jane Austen, “Sense and Sensibility”",
      "“Every atom of your flesh is as dear to me as my own: in pain and sickness it would still be dear. Your mind is my treasure, and if it were broken, it would be my treasure still.” ― Charlotte Brontë, “Jane Eyre”",
      "“Every atom of your flesh is as dear to me as my own: in pain and sickness it would still be dear. Your mind is my treasure, and if it were broken, it would be my treasure still.” ― Charlotte Brontë, “Jane Eyre”",
      "“To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life.” ― Victor Hugo, “Les Misérables”",
      "“The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds. And that’s what you’ve given me. That’s what I’d hoped to give you forever” ― Nicholas Sparks, “The Notebook”",
      "“Whatever our souls are made of, his and mine are the same.” — Emily Brontë, “Wuthering Heights” ",
    
    ];
  
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };
  
  
  // Function to get a unique key for each day
  const getKeyForDay = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1; // Months are 0-indexed, so we add 1
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
  };
  
  
  // Function to get the quote of the day
  const getQuoteOfTheDay = () => {
    const keyForDay = getKeyForDay();
    const storedQuote = localStorage.getItem(keyForDay);
  
    if (storedQuote) {
      // If a quote is already stored for the day, return it
      return storedQuote;
    } else {
      // If no quote is stored, get a new random quote and store it
      const newQuote = getRandomQuote();
      localStorage.setItem(keyForDay, newQuote);
      return newQuote;
    }
  };
  
  // Example usage
  const quoteOfTheDay = getQuoteOfTheDay();
  console.log(quoteOfTheDay);
  
  
  export default getQuoteOfTheDay;  // Export getQuoteOfTheDay instead of getRandomQuote
  