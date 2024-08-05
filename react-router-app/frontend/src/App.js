import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import EventDetailPage from "./pages/EventDetailPage.jsx";
import NewEventPage from "./pages/NewEventPage.jsx";
import EditEventPage from "./pages/EditEventPage.jsx";
import RootLayout from "./components/RootLayout.js";
import EventLayout from "./components/EventLayout.js";
import { eventLoader, eventsLoader, tokenLoader, checkAuth } from "./loaders/loaders.js";
import Error from "./components/Error.jsx";
import { authAction, deleteEvent, newEventUploader as eventsManipulator, logoutAction } from "./actions/actions.js";
import NewsletterPage from "./pages/NewsLetter.jsx";
import { action as newsletterAction } from "./actions/actions.js";
import AuthenticationPage from "./pages/Authentication.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    loader: tokenLoader,
    id: 'root',
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
              { path: "edit", element: <EditEventPage />, action: eventsManipulator, loader: checkAuth }
            ],
          },
          { path: "new", element: <NewEventPage />, action: eventsManipulator, loader: checkAuth },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: 'auth',
        element: <AuthenticationPage />,
        action: authAction
      },
      {
        path: 'logout',
        action: logoutAction
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
