import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import DashboardLayout from "../dashboard/dashboard-layout";
import Sidebar from "./_components/sidebar";

export default function UserManagement() {
  return (
    <DashboardLayout>
      <AppSidebar>
        <Sidebar />
      </AppSidebar>

      <SidebarInset className="bg-[url('/images/dashboard.jpg')] bg-cover p-8">
        <Outlet />
      </SidebarInset>
    </DashboardLayout>
  );
}
