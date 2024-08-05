import { json, redirect } from "react-router-dom";
import { getAuthToken } from "../utils/auth";



// Event Upload action
export async function newEventUploader({request, params}){

    const data = await request.formData();
    const body = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    } 

    const token = getAuthToken();

    let url = `http://localhost:8080/events${request.method === 'PATCH' ? '/' + params.eventId : ''}`

    const response = await fetch(url,{
        method: request.method,
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`
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
    const token = getAuthToken();
    const response = await fetch(`http://localhost:8080/events/${eventId}`, {
        method: request.method,
        headers: {
            'Authorization': `Bearer ${token}`
        }
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

  //Authentication Action
  export async function authAction({request}){
    // get url parameters
    const params = new URL(request.url).searchParams;
    const mode = params.get('mode');

    // Check if parameters are of the correct mode
    if ( mode !== 'signup' && mode !== 'login' ){
        throw json({message: 'Unsupported Mode!'}, {status: 401});
    }

    // something@me.com nothings
    // Get form data
    const data = await request.formData();
    const reqBody = {
        email: data.get('email'),
        password: data.get('password')
    };


    // send request to backend
    const response = await fetch(`http://localhost:8080/${mode}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    });

    // check for any errors
    if (response.status === 422 || response.status === 401){
        return response;
    }

    if (!response.ok){
        console.log('Problem came from here');
        throw json({message: 'Could not authenticate user'}, {status: 401});
    }

    // Handle response
    const token = await response.json();
    console.log(token);
    localStorage.setItem('token', token.token);

    return redirect('/');
  }

  // Logout Action
  export function logoutAction(){
    localStorage.removeItem('token');
    return redirect('/');
  }

  