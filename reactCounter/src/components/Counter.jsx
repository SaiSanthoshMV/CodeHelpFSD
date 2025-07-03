import React from 'react';
import { useState } from 'react';
import './Counter.css'
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='counter-container'>
      <p> You Clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>click</button>
    </div>
  );
};

export default Counter