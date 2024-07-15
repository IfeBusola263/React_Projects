import React, {useEffect, useState} from 'react';


function DigitalClock(){

    const [timeDisplay, setTimeDisplay] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeDisplay(new Date());
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    function timeFormatter() {
        let hours = timeDisplay.getHours();
        const minutes = timeDisplay.getMinutes();
        const seconds = timeDisplay.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM"; 

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number){

        return (number < 10 ? "0" : "") + number;
    }

    return(
        <div className="clock-container">
            <div className="clock">
                <span>{timeFormatter()}</span>
            </div>
        </div>
    )

}

export default DigitalClock;