import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { Outlet, ScrollRestoration } from "react-router";

export default function OnBoardingLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-[url('/images/login-page.svg')] bg-cover">
      <Header />
      <main className="flex-1">
        <Outlet />
        <ScrollRestoration />
      </main>
      <Footer />
    </div>
  );
}
