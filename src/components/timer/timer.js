import React, {useState, useEffect} from 'react'

export const Timer = ({ duration }) => {

    const [timeLeft, setTimeLeft] = useState(duration);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [timeLeft]);
    
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    return (
        <div>
            <h2>Countdown:</h2>
            <p>{formatTime(timeLeft)}</p>
        </div>
    )
}
