import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet, useParams } from "react-router";
import DashboardLayout from "../dashboard-layout";
import Sidebar from "./_components/sidebar";

export default function Compliance() {
  const { id } = useParams();

  return (
    <DashboardLayout>
      <AppSidebar>
        <Sidebar />
      </AppSidebar>

      <SidebarInset>
        <header className="bg-background sticky top-0 flex shrink-0 items-center gap-2 border-b p-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {id ? <Outlet /> : <div> No Compliance Chat ID</div>}
        </div>
      </SidebarInset>
    </DashboardLayout>
  );
}
