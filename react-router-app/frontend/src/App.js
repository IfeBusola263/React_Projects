import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import HomePage from "./pages/HomePage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import EventDetailPage from "./pages/EventDetailPage.jsx";
import NewEventPage from "./pages/NewEventPage.jsx";
import EditEventPage from "./pages/EditEventPage.jsx";
import RootLayout from "./components/RootLayout.js";
import EventLayout from "./components/EventLayout.js";
import { eventLoader, eventsLoader } from "./loaders/loaders.js";
import Error from "./components/Error.jsx";
import { deleteEvent, newEventUploader as eventsManipulator } from "./actions/actions.js";
import NewsletterPage from "./pages/NewsLetter.jsx";
import { action as newsletterAction } from "./actions/actions.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          {
            path: ":eventId",
            id: "event-details",
            loader: eventLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEvent
              },
              { path: "edit", element: <EditEventPage />, action: eventsManipulator }
            ],
          },
          { path: "new", element: <NewEventPage />, action: eventsManipulator },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);
// 3. Add a root layout that adds the <MainNavigation> component above all page components DONE
// 4. Add properly working links to the MainNavigation  DONE
// 5. Ensure that the links in MainNavigation receive an "active" class when active DONE
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage DONE
// 7. Output the ID of the selected event on the EventDetailPage DONE
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

function App() {
  return <RouterProvider router={router} />;
}

export default App;
