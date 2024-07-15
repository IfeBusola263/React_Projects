import React, {useState} from 'react';


function Car(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCars(){

        const newCar = {
            year: carYear,
            make: carMake,
            model: carModel
        };

        setCars(prevCar => [...prevCar, newCar])

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }

    function handleAddYear(event){

        setCarYear(event.target.value);

    }

    function handleAddMake(event){
        setCarMake(event.target.value);
    }

    function handleAddModel(event){
        setCarModel(event.target.value);
    }

    function handleRemoveCar(idx){
        setCars(cars.filter((_, index) => index !== idx))
    }

    return(
        <>
            <div>
                <h2>Car List:</h2>
                <ul className='car-list-container'>
                    {cars.map((car, index) => {
                        if (car && car.year && car.make && car.model)
                            return <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>
                    })}
                </ul>
                <input type="number" value={carYear} onChange={handleAddYear} placeholder="Add a year"/><br/>
                <input type="text" value={carMake} onChange={handleAddMake} placeholder="Add a maker"/><br/>
                <input type="text" value={carModel} onChange={handleAddModel} placeholder="Add a model"/><br/>
                <button onClick={handleAddCars}>Add a Car</button>
            </div>
        </>
    )
}

export default Car;