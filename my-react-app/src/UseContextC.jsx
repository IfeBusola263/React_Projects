import UseContextD from "./UseContextD";
import React, {useContext} from 'react';
import { userContext } from "./UseContextA";

function UseContextC(){

    const user = useContext(userContext);

    return(
        <div className="box">
            <h1>Context C</h1>
            <h2>{user} is now in another context!</h2>
            <UseContextD />
        </div>
    )
}

export default UseContextC;