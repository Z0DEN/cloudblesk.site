import React, { useState, useEffect } from 'react';
import { styles } from './style'; 

function Counter() {
  const [count, setCount] = useState(0);
  const [height, setHeight] = useState(400);
  
  function increment() {
    setCount(count + 1);
    setHeight(height + 20)
  }
  
  function decrement() {
    setCount(count - 1);
    setHeight(height - 20)
  }
  
  useEffect(() => {
    document.documentElement.style.setProperty('--s', `${height}px`);
  }, [height]);

  return (
    <div style={styles.html}>  
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}


function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [color, setColor] = useState('red');

  useEffect(() => {
    const timer = setInterval(() => {
      const colors = [
        'crimson',
        'darkred',
        'orangered',
        'coral',
        'khaki',
        'lime',
        'teagreen',
        'dodgerblue',
        'purple',
        'pink',
        'black',
      ];
      
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(randomColor);
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
  };

  const formattedTime = currentTime.toLocaleDateString('en-US', options);

  return (
    <div>
      <p style={{ color: color, transition: 'all 1s ease-in-out'}}>{formattedTime}</p>
    </div>
  );
}

export { Time, Counter };