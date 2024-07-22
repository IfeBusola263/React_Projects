
export async function fetchFunc(){
    const response = await fetch("http://localhost:3000/places");
    
    if (!response.ok) {
        throw new Error("Failed to fetch from server");
    }
    const resData = await response.json();
    return resData.places;
}

export async function updatePlaces(places){
        const response = await fetch('http://localhost:3000/user-places',{
            method: 'PUT',
            body: JSON.stringify({ places }),
            headers: {
                'Content-type': 'application/json'
            }
        });

        if (!response.ok){
            throw new Error('Could not upload data');
        }
        const resData = await response.json();
        return resData.message
    }