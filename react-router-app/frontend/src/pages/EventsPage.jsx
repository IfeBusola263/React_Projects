import { Await, useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
    const { events } = useLoaderData();
    console.log(events);
  return (
    <Suspense fallback={<p style={{textAlign: 'center'}}>loading...</p>}>
      <Await resolve={events}>
      {(events) => <EventsList events={events} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;