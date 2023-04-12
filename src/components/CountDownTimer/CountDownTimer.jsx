import React, { useState, useEffect } from 'react';


function CountdownTimer({onEndFn, endDate, status }) {
  const [timeRemaining, setTimeRemaining] = useState(status !== 'Closed');

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = new Date(endDate).getTime() - now.getTime();
  
    if (difference > 0) {
      setTimeRemaining({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    } else {
      if (status === "Available") {
      
        setTimeRemaining(false)
        onEndFn()
      }
    
    }
  }

  useEffect(() => {
    if (status !== 'Closed') {
      const intervalId = setInterval(() => {
        calculateTimeRemaining();
      }, 1);

      return () => clearInterval(intervalId);
    }
  }, []);

  
  return (
    <div>
      {!timeRemaining ? <p>Closed</p> : <p>{timeRemaining.days} days, {timeRemaining.hours} hours, {timeRemaining.minutes} minutes, {timeRemaining.seconds} seconds</p>}
    </div>
  );

  //PREGUNTAR COMO SE HARÍA PARA QUE NO SE PRINTE JUSTO ESE SEGUNDO EN CLOSED. 
  //ESTÁ BIEN ASÍ?? }, 1);

}

export default CountdownTimer;