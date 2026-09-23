import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import DashboardLayout from "../dashboard-layout";
import Matrix from "./_components/matrix";
import RecentActivity from "./_components/recent-activity";

export default function Home() {
  return (
    <DashboardLayout>
      <AppSidebar />
      <SidebarInset className="bg-[url('/images/dashboard.jpg')] bg-cover">
        <header className="sticky top-0 flex shrink-0 items-center justify-between gap-2 p-4">
          <h2 className="font-sans text-2xl leading-8 font-bold tracking-[-0.72px]">
            Dashboard
          </h2>
          <div className="flex items-center gap-2">
            <Search className="mr-2 h-4 w-4" />
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="h-full space-y-6 rounded-3xl border border-[#E9EAEB] bg-white p-6">
            <Matrix />
            <RecentActivity />
          </div>
        </div>
      </SidebarInset>
    </DashboardLayout>
  );
}
