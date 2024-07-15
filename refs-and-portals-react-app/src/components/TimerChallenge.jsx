import { useRef, useState } from "react";
import ResultsModal from "./ResultsModal";

export default function TimerChallenge({title, targetTime}){

    // No longer tracking the time, but the time remaining at each interval of 10 millisecond
    // const [timerStarted, setTimerStarted] = useState(false);
    // const [timeExpired, setTimeExpired] = useState(false);

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    // Timer to restart the setTimout when it expires or when it is stopped.
    const timer = useRef();

    // Ref to programatically display the dialog element.
    const dialog = useRef();

    // Time tracker
    // Time would be active if the time remaining is greater than Zero
    // and also if it less than the set target time
    const timeIsActive = timeRemaining > 0 && timeRemaining < (targetTime * 1000); 

    // When the timer stops
    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleStart(){
        // setTimerStarted(true);
        // timer.current = setTimeout(() => {
        //     setTimeExpired(true)
        //     setTimerStarted(false);
        //     dialog.current.open();
        // }, targetTime * 1000);

        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    // When the timer is manually stopped
    function handleStop(){
        clearInterval(timer.current);
        dialog.current.open();
    }

    // handle the reset of the timer
    function handleReset() {
        setTimeRemaining(targetTime * 1000);
    }


    return (
        <>
            <ResultsModal 
                ref={dialog} 
                targetTime={targetTime} 
                timeLeft={(timeRemaining / 1000).toFixed(2)} 
                onReset={handleReset}
                />
            <section className="challenge">
                <h2>{title}</h2>
                {/* {timeExpired && <p>You Lost</p>} */}
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <p>
                    <button onClick={timeIsActive ? handleStop : handleStart }>
                        {!timeIsActive ? 'Start Challenge' : 'Stop Challenge'}
                    </button>
                </p>
                <p className={timeIsActive ? 'active' : ''}>
                    {timeIsActive ? 'Time is running....' : 'Timer Inactive'}
                </p>
            </section>
        </>
        
    );
}