import React, {useState, useEffect} from 'react';


function TheUseEffect() {

    /* const [count, setCount] = useState(0);
    const [colour, setColour] = useState('green');

    useEffect(() => {
        document.title = `Count ${count} ${colour}`;
    }, [count, colour])

    function addCount(){
        setCount(prevCount => prevCount + 1);
    }

    function addColour(){
        setColour(colour === 'green' ? 'blue': 'green');
    }

    return(
        <>
            <h2 style={{color: colour}}>Counter: {count}</h2>
            <button onClick={addCount}>Add</button><br/>
            <button onClick={addColour}>switch colour</button>
        </>
    )*/

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize', handleResize);   
         console.log("Event Listener Added");

         return () => {
            window.removeEventListener('resize', handleResize);
            console.log("Event Listener Removed");
         }
    }, [])
    
   

    function handleResize(){
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    }

    return (
        <div>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </div>
    )


}

export default TheUseEffect;