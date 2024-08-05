import { defer, json } from "react-router-dom";

async function loadEvents(){
    const response = await fetch('http://localhost:8080/events');
    
    if (!response.ok) {
        // always JSONify response bodies
        // throw new Response(JSON.stringify({message: 'Could not fetch Events'}), {status: 500});
        throw json({message: 'Could not fetch Events'}, {status: 500});
    }

    const resData = await response.json();

    return resData.events;
}

// fetches all events data
export function eventsLoader(){
   return  defer({
        events: loadEvents()
    });
}

// fetch a single event based on event id
export async function eventLoader({ request, params }){
    const eventId = params.eventId;
    const response = await fetch(`http://localhost:8080/events/${eventId}`);

    if (!response.ok){
        throw json({message: "Could not fetch details of selected event"}, {status: 500});
    }

    return response;
}