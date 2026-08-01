import { auth } from "@/config/firebase";
import { Navigate, Outlet, ScrollRestoration } from "react-router";

export default function AuthLayout() {
  const user = auth.currentUser;

  return !user ? (
    <div className="flex min-h-dvh flex-col bg-[url('/images/login-page.svg')] bg-cover bg-center">
      <h1>Header</h1>
      <main className="flex-1">
        <Outlet />
        <ScrollRestoration />
      </main>
      <div>Footer</div>
    </div>
  ) : (
    <Navigate to="/dashboard" replace={true} />
  );
}
