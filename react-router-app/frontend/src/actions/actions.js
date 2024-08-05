import { json, redirect } from "react-router-dom";

// Event Upload action
export async function newEventUploader({request, params}){

    const data = await request.formData();
    const body = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    }

    let url = `http://localhost:8080/events${request.method === 'PATCH' ? '/' + params.eventId : ''}`

    const response = await fetch(url,{
        method: request.method,
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    if (response.status === 422){
        // Return the error message, so it can be displayed on the frontend, instead of showing the error message
        return response;
    }

    if (!response.ok){
        throw json({message: 'Could not save event'});
    }

    return redirect('/events');
}

// Event deletion action

export async function deleteEvent({ request, params }){
    const eventId = params.eventId;
    const response = await fetch(`http://localhost:8080/events/${eventId}`, {
        method: request.method,
    });

    if (!response.ok){
        throw json({message: 'Could not delete event'}, {status: 500});
    }

    return redirect('/events');
}

// Newsletter action

export async function action({ request }) {
    const data = await request.formData();
    const email = data.get('email');
  
    // send to backend newsletter server ...
    console.log(email);
    return { message: 'Signup successful!' };
  }