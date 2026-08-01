import HydrateFallback from "@/components/shared/hydrate-fallback";
import Root from "@/components/shared/root";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { loadUser } from "./lib/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    hydrateFallbackElement: <HydrateFallback />,
    errorElement: <div>error</div>,
    loader: loadUser,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
