import { useState } from 'react';
export default function Player({name, symbol, isActive, changeName}) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    function handleEditing(e){
        setIsEditing(editing => !editing);
        e.target.innerText = e.target.innerText === "Edit" ? "Save" : "Edit";

        if (isEditing){
            changeName(symbol, playerName);
        }
    }

    function updatePlayerName(e){
        setPlayerName(e.target.value);
    }

    return (
        <>
            <li className={ isActive ? 'active' : "" }>
                <span className="player">
                    {!isEditing ? <span className="player-name">{playerName}</span> : <input type="text" onChange={updatePlayerName} value={playerName} required/>}
                    <span className="player-symbol">{symbol}</span>
                </span>
                <button onClick={handleEditing}>Edit</button>
                {/* <button onClick={handleEditing}>{isEditing ? "Save" : "Edit "}</button> */}
          </li>
        </>
    )
}