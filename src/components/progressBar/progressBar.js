import React, {useState,useEffect} from 'react'

export const ProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress < 100) {
            setProgress(progress + 10);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [progress]);
  
    return (
        <div>
            <div style={{width: `${progress}%`, height: '20px', backgroundColor: 'green',}}>

            </div>
      </div>
    );
  };