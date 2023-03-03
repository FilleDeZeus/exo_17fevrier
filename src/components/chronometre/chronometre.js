import React, { useState, useEffect } from "react";

export const Chronometre = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSeconds(seconds => {
                if (seconds >= 59) {
                    setMinutes(minutes => {
                        if (minutes >= 59) {
                            setHours(hours => hours + 1);
                        return 0;
                        }
                    return minutes + 1;
                    });
                return 0;
                }
            return seconds + 1;
            });
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    
    const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
    };
    return (
        <div>
            <p>{`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`}</p>
        </div>
    );
}

