import UseContextB from "./UseContextB";
import React, {useState, createContext} from 'react';

export const userContext = createContext();

function UseContextA(){

    const [user, setUser] = useState("Light");

    return(
        <div className="box">
            <h1>Context A</h1>
            <h2>Hello: {user}!</h2>

            <userContext.Provider value={user}>
            <UseContextB />
            </userContext.Provider>
            
        </div>
    )
}

export default UseContextA;