import { useQuery } from "@tanstack/react-query";
import { useState, useRef } from "react";
import { fetchEvents } from "../../utils/http";
import LoadingIndicator from "../UI/LoadingIndicator";
import ErrorBlock from "../UI/ErrorBlock";
import EventItem from "./EventItem";

export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm(searchElement.current.value);
  }

  // send request with tanstack
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["events", { searchTerm }],
    queryFn: ({ signal, queryKey }) => fetchEvents({...queryKey[1], signal}),
    enabled: searchTerm !== null
  });

  let content = <p>Please enter a search term and to find events.</p>;

  // handle loading
  if (isLoading) {
    content = <LoadingIndicator />;
  }

  // handle error
  if (isError) {
    content = (
      <ErrorBlock title="An error occured" message={error.info?.message} />
    );
  }

  // handle data to be displayed

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
