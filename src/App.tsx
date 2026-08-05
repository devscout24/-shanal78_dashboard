import HydrateFallback from "@/components/shared/hydrate-fallback";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Toaster } from "sonner";
import Root from "./components/shared/root";
import {
  changePlan,
  forgotPassword,
  login,
  register,
  sendMessage,
  sendNewMessage,
  updatePassword,
  updateProfileInfo,
} from "./lib/action";
import { loadUser, loginWithGoogle, messages } from "./lib/loader";
import AuthLayout from "./pages/auth/auth-layout";
import ForgotPassword from "./pages/auth/forgot-password";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import Compliance from "./pages/dashboard/compliance";
import Chat from "./pages/dashboard/compliance/chat";
import Home from "./pages/dashboard/home";
import UserManagement from "./pages/user-management";
import Billing from "./pages/user-management/billing";
import Password from "./pages/user-management/password";
import Profile from "./pages/user-management/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    hydrateFallbackElement: <HydrateFallback />,
    errorElement: <div>error</div>,
    loader: loadUser,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "compliance-chat",
        element: <Compliance />,
        action: sendNewMessage,
        children: [
          {
            path: ":id",
            element: <Chat />,
            loader: messages,
            action: sendMessage,
          },
        ],
      },
      {
        path: "user-management",
        element: <UserManagement />,
        children: [
          {
            index: true,
            element: <Navigate to="profile" />,
          },
          {
            path: "profile",
            element: <Profile />,
            action: updateProfileInfo,
          },
          {
            path: "password",
            element: <Password />,
            action: updatePassword,
          },
          {
            path: "billing",
            element: <Billing />,
            action: changePlan,
          },
          {
            path: "notifications",
            element: <div>Notifications</div>,
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
        element: <Signup />,
        action: register,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
        action: forgotPassword,
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
