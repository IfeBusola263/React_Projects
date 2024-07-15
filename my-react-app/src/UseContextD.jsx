import React, {useContext} from 'react';
import { userContext } from './UseContextA';

function UseContextD(){

    const user = useContext(userContext);

    return(
        <div className="box">
            <h1>Context D</h1>
            <h2>{user} is now in a different context, whaoow!</h2>
        </div>
    )
}

export default UseContextD;