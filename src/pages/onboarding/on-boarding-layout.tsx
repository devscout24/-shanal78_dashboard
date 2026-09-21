import { Outlet, ScrollRestoration } from "react-router";

export default function OnBoardingLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-[#F7FBFE]">
      <main className="flex-1">
        <Outlet />
        <ScrollRestoration />
      </main>
    </div>
  );
}
