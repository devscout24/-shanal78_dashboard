import { Outlet, ScrollRestoration } from "react-router";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <h1>Header</h1>
      <main className="flex-1">
        <Outlet />
        <ScrollRestoration />
      </main>
      <div>Footer</div>
    </div>
  );
}
