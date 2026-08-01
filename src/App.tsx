import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="text-2xl font-bold">Hello World</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
