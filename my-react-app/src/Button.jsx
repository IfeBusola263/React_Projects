

function Button() {

    let counter = 0;

    const clickHandler = (name) => {
        console.log("This is How you will send request to the backend");
        if (counter < 4) {
            counter++;
            console.log(`${name}! you have clicked ${counter} times/'s`);
        } else {
            counter++;
            console.log(`This is the ${counter} times, you should stop`)
        }
    };

    function handler(e) {
        console.log(e);
    }

    return(
        <button className="btn" onClick={(e) => handler(e)}>Click Me 😎</button>
    ); 
}

export default Button;