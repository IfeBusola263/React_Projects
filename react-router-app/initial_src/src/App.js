import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import RootNav from "./components/RootNav";
import ErrorPage from "./pages/ErrorPage";
import ProductDetails from "./pages/ProductDetailsPage";

// define routes with createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootNav />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <ProductPage /> },
      { path: "products/:productId", element: <ProductDetails /> },
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
