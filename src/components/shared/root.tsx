import { Outlet, ScrollRestoration } from "react-router";
import { Toaster } from "../ui/toast";

export default function Root() {
  return (
    <div className="flex min-h-dvh flex-col">
      <h1>Header</h1>
      <main className="flex-1">
        <Outlet />
        <ScrollRestoration />
      </main>
      <div>Footer</div>

      <Toaster />
    </div>
  );
}
