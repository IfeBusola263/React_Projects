import {
  Link,
  useNavigate,
  useParams,
  redirect,
  useSubmit,
  useNavigation,
} from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../utils/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const { state } = useNavigation();
  const id = useParams().id;
  const { data, error, isError } = useQuery({
    queryKey: ["events", { id }],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
    staleTime: 10000
  });

  // Handle Submitting updated data
  // const { mutate } = useMutation({
  //   mutationFn: updateEvent,
  //   onMutate: async (data) => {
  //     // get new Data
  //     const newEvent = data.event;

  //     // Cancel queries to the key
  //     await queryClient.cancelQueries({queryKey: ['events', { id }] });

  //     // get previous Data to roll back optimistic update faliure
  //     const previousEvent = queryClient.getQueryData(['events', { id }]);

  //     //Perform optimistic Update
  //     queryClient.setQueryData(['events', { id }], newEvent);

  //     return { previousEvent };
  //   },
  //   onError: (error, data, context) => {

  //     // Handle roll back, on error
  //       queryClient.setQueryData(['events', { id }], context.previousEvent);
  //   },
  //   onSettled: async () => {
  //     // Trigger a request for this query to be sure you have latest data.
  //     await queryClient.invalidateQueries({queryKey: ['events', { id } ]});
  //   }
  // });

  function handleSubmit(formData) {
    submit(formData, { method: "post" });
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to fetch"
          message={error.info?.message || "Not an Event"}
        />
        <div className="form-actions">
          <Link to="../">Okay</Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        {state === "submitting" ? (
          <span style={{display: 'block'}}>Submitting Update</span>
        ) : (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            <button type="submit" className="button">
              Update
            </button>
          </>
        )}
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}

export function editEventLoader({ params }) {
  const id = params.id;
  return queryClient.fetchQuery({
    queryKey: ["events", { id }],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
  });
}

export async function editEventAction({ request, params }) {
  const id = params.id;
  console.log(id);
  const formData = await request.formData();
  const newEvent = Object.fromEntries(formData);
  await updateEvent({ id, event: newEvent });
  await queryClient.invalidateQueries({ queryKey: ["events", { id }] });

  return redirect("../");
}
