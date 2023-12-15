import React, { useState, useEffect } from 'react';
import Score from "../components/Score";

const Timer = () => {
  const [timer, setTimer] = useState(120); // Set the initial timer value in seconds
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // Decrease the timer every second
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    // Check if the timer has reached zero
    if (timer === 0) {
      clearInterval(countdown);
      setShowResults(true); // Update showResults state to true
      alert('Time is up!'); // Optional alert message
    }

    // Clean up the interval when the component unmounts
    return () => clearInterval(countdown);
  }, [timer]);

  return (
    <>
      <div>
        {showResults ? (
          <Score /> // Render the Score component when showResults is true
        ) : (
          <div>Time Left: {timer}</div> // Render the time left
        )}
      </div>
    </>
  );
};

export default Timer;
