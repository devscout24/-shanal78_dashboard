import HydrateFallback from "@/components/shared/hydrate-fallback";
import { Provider } from "react-redux";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Toaster } from "sonner";
import NotFoundPage from "./components/not-found-page";
import RouteError from "./components/route-error";
import Root from "./components/shared/root";
import {
  changePlan,
  forgotPassword,
  login,
  processPayment,
  register,
  selectState,
  sendMessage,
  sendNewMessage,
  updatePassword,
  updateProfileInfo,
} from "./lib/action";
import {
  billingHistory,
  loadUser,
  loginWithGoogle,
  messages,
  plans,
} from "./lib/loader";
import AuthLayout from "./pages/auth/auth-layout";
import ForgotPassword from "./pages/auth/forgot-password";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import Compliance from "./pages/dashboard/compliance";
import Chat from "./pages/dashboard/compliance/chat";
import Home from "./pages/dashboard/home";
import MySubscription from "./pages/dashboard/my-subscription";
import UserManagement from "./pages/dashboard/user-management";
import OnBoardingLayout from "./pages/onboarding/on-boarding-layout";
import Payments from "./pages/onboarding/payments";
import State from "./pages/onboarding/state";
import Terms from "./pages/onboarding/terms";
import SettingsPreferences from "./pages/settings-preferences";
import Billing from "./pages/settings-preferences/billing";
import Notification from "./pages/settings-preferences/notification";
import Password from "./pages/settings-preferences/password";
import Profile from "./pages/settings-preferences/profile";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    hydrateFallbackElement: <HydrateFallback />,
    errorElement: <RouteError />,
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
        path: "my-subscription",
        element: <MySubscription />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "settings-preferences",
        element: <SettingsPreferences />,
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
            loader: billingHistory,
          },
          {
            path: "notifications",
            element: <Notification />,
          },
        ],
      },
      {
        path: "onboarding",
        element: <OnBoardingLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="state" />,
          },
          {
            path: "state",
            element: <State />,
            action: selectState,
            loader: plans,
          },
          {
            path: "payments",
            element: <Payments />,
            action: processPayment,
          },
          {
            path: "terms",
            element: <Terms />,
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
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster richColors />
    </Provider>
  );
}

export default App;
