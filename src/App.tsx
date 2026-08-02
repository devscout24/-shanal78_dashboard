import HydrateFallback from "@/components/shared/hydrate-fallback";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Toaster } from "sonner";
import Root from "./components/shared/root";
import { login } from "./lib/action";
import { loadUser, loginWithGoogle } from "./lib/loader";
import AuthLayout from "./pages/auth/auth-layout";
import Login from "./pages/auth/login";
import DashboardLayout from "./pages/dashboard/dashboard-layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    hydrateFallbackElement: <HydrateFallback />,
    errorElement: <div>error</div>,
    loader: loadUser,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <div>Dashboard</div>,
          },
        ],
      },
    ],
  },

  {
    path: "auth",
    element: <AuthLayout />,
    loader: loadUser,
    children: [
      {
        index: true,
        element: <Navigate to="login" />,
      },
      {
        path: "login",
        element: <Login />,
        action: login,
      },
      {
        path: "register",
        element: <div>HI</div>,
      },
      {
        path: "login-with-google",
        loader: loginWithGoogle,
      },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster richColors />
    </>
  );
}

export default App;
