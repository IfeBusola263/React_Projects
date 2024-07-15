import { useState, useRef } from "react";

export default function Player() {
const [setName, setSetName] = useState(null);
const playerName = useRef();

function handleNameChange(){
  console.log(playerName);
  setSetName(playerName.current.value);
}


  return (
    <section id="player">
      <h2>Welcome {setName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" ref={playerName}/>
        <button onClick={handleNameChange}>Set Name</button>
      </p>
    </section>
  );
}
