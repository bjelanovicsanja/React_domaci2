import React, { useEffect } from 'react';
import './counter.css';

export default function Counter ({
    questionNumber,
    setTimer,
    timer,
    setTime_up,
    timerRef,
}) {
  
    useEffect(() => {
        if(timer <= 0  || questionNumber >= 21){
            setTime_up(true);
            return;
        }
        timerRef.current = setInterval(() => {
            setTimer((prevTimer) => prevTimer - 1);
        }, 1000);

        return () => {
            clearInterval(timerRef.current);
        };
    }, [questionNumber, setTime_up, timer, setTimer, timerRef]);

    return (
        <div className="counter">
      <h2 className={`${timer <= 3 ? 'warning' : ''}`}>
        {timer < 20 ? '0' : ''}
        {timer}
      </h2>
    </div>
  );
}