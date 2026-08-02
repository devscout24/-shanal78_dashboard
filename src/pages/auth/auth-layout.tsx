import Header from "@/components/shared/header";
import { auth } from "@/config/firebase";
import { Navigate, Outlet, ScrollRestoration } from "react-router";

export default function AuthLayout() {
  const user = auth.currentUser;

  return !user ? (
    <div className="flex min-h-dvh flex-col bg-[url('/images/login-page.svg')] bg-cover">
      <Header />
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
