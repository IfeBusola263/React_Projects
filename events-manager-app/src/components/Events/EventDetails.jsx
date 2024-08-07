import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../utils/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import Modal from "../UI/Modal.jsx";
import { useState } from "react";

export default function EventDetails() {
  // Manage state for handling delete modal
  const [isDeleting, setIsDeleting] = useState(false);

  // get navigator
  const navigate = useNavigate();

  // get event id from the url parameter.
  const id = useParams().id;

  // send request for the event detail.
  const { data, isPending, error, isError } = useQuery({
    queryKey: ["events", { id }],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });

  // handle mutation request to delete an event.
  const {
    mutate,
    isPending: Pending,
    isError: hasError,
    error: err,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  // Handle event deleteion
  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleStopDelete() {
    setIsDeleting(false);
  }

  function handleDelete() {
    mutate({ id });
  }
  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
          <h2>Are you sure?</h2>
          <p>Do you really want to delete this event?</p>
          {Pending ? (
            "Deleting Event.."
          ) : (
            <div className="form-actions">
              <button onClick={handleStopDelete} className="button-text">
                Cancel
              </button>
              <button onClick={handleDelete} className="button">
                Delete
              </button>
            </div>
          )}
          {hasError && (
            <ErrorBlock
              title="Failed to Delete"
              message={err.info?.message || "Could not Delete Event"}
            />
          )}
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isPending && "Loading Event Details..."}
      {isError && (
        <ErrorBlock
          title="Could not fetch Event details..."
          message={error.info?.message || "No Event Details"}
        />
      )}
      {data && (
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={handleStartDelete} disabled={Pending}>
                Delete
              </button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt="" />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>
                  {data.date} @ {data.time}
                </time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
