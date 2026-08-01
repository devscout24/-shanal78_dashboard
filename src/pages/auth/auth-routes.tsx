import { auth } from "@/config/firebase";
import { Navigate, Outlet } from "react-router";

export default function AuthRoutes() {
  const user = auth.currentUser;

  return !user ? <Outlet /> : <Navigate to="/dashboard" replace={true} />;
}
