

function Food(){

    const food1 = "Fufu";
    const food2 = "Marugbo";

    return(
        <ul>
            <li>Banana</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    )

}

export default Food