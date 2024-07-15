
import React, {useState} from 'react'

function MyComponent() {

    const [name, setName] = useState("No Name");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName('LIGHT IFEBusola');
    }

    const incrAge = () => {
        setAge(age + 1);
    }

    const employmentState = () => {
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrAge}>Increment Age</button>

            <p>Employed: {isEmployed ? 'Yes' : 'No'}</p>
            <button onClick={employmentState}>Employment State</button>
        </div>
    )
}

export default MyComponent;