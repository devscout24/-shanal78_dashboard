import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardLayout from "../dashboard-layout";

export default function Home() {
  return (
    <DashboardLayout>
      <AppSidebar>No Sidebar</AppSidebar>

      <SidebarInset>
        <header className="bg-background sticky top-0 flex shrink-0 items-center gap-2 border-b p-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div>Home</div>
        </div>
      </SidebarInset>
    </DashboardLayout>
  );
}
