import React, { useState, useEffect } from 'react';

export default function CountdownTimer({minutes, seconds}:{ minutes: number, seconds: number }) {
  const [remainingTime, setRemainingTime] = useState(minutes * 60 + seconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(prevTime => prevTime - 1);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [remainingTime]);

  const displayMinutes = Math.floor(remainingTime / 60).toString().padStart(2, '0');
  const displaySeconds = (remainingTime % 60).toString().padStart(2, '0');

  return (
    <div className='text-center text-gray-400 text-2xl mb-4'>
      {displayMinutes}:{displaySeconds}
    </div>
  );
}
