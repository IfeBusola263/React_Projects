import React, {useState} from "react";


function UpdateArray(){

    const [bibleNames, setBibleNames] = useState(["David", "Jonathan"]);

    function handleAddName(){
        const newName = document.getElementById('nameInput').value;
        document.getElementById('nameInput').value = "";

        // Always use updater function to set state of a usestate variable
        setBibleNames(prevBibleName => [...prevBibleName, newName]);
    }

    function handleRemoveName(idx){

        setBibleNames(bibleNames.filter((_, index) => index !== idx));
    }

    return (<>

            <div>
                <h2>Bible Names</h2>
                <ul className="bible-names-list">
                    {bibleNames.map((name, index) => {
                        if (name)
                            return <li key={index} onClick={()=> handleRemoveName(index)}>{name}</li>
                    })}
                </ul>
                <input type="text" id="nameInput" placeholder="Enter a Bible Name" />
                <button onClick={handleAddName}>Add a Name</button>
            </div>
    </>)
}

export default UpdateArray;