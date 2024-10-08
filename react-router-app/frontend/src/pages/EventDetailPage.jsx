import { useRouteLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem";

export default function EventDetailPage(){
    const {event} = useRouteLoaderData('event-details');

    return(
        <EventItem event={event} />
    ) 
}