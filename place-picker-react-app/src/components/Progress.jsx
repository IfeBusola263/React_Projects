import { useState, useEffect } from "react";

export default function Progress({timer}){
    const [timeRemaining, setTimeRemaining] = useState(timer)

    useEffect(() => {
      const timerPointer = setInterval(() => {
        setTimeRemaining(prevTimeRemaing => prevTimeRemaing - 10);
      }, 10)
  
      return () => {
        clearInterval(timerPointer);
      }
    }, [])

    return(
        <div>
            <label htmlFor="delete" className="p-4">Deleting in {Math.floor(((timeRemaining / timer)) * 10) + 1} secs</label>
            <progress id='delete' value={timeRemaining} max={timer} ></progress>
        </div>
    )
}