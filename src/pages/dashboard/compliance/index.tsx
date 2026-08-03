import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import { Outlet, useParams } from "react-router";
import DashboardLayout from "../dashboard-layout";
import NewChat from "./_components/new-chat";
import Sidebar from "./_components/sidebar";

export default function Compliance() {
  const { id } = useParams();

  return (
    <DashboardLayout>
      <AppSidebar>
        <Sidebar />
      </AppSidebar>

      <SidebarInset className="bg-[url('/images/dashboard.jpg')] bg-cover">
        <header className="sticky top-0 flex shrink-0 items-center justify-between gap-2 p-4">
          <h2 className="font-sans text-2xl leading-8 font-bold tracking-[-0.72px]">
            New Chat
          </h2>
          <div className="flex items-center gap-2">
            <Search className="mr-2 h-4 w-4" />
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {id ? <Outlet /> : <NewChat />}
        </div>
      </SidebarInset>
    </DashboardLayout>
  );
}
