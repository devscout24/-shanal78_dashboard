import { SidebarProvider } from "@/components/ui/sidebar";
import type { PropsWithChildren } from "react";
import { ScrollRestoration } from "react-router";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "350px",
        } as React.CSSProperties
      }
    >
      {children}
      <ScrollRestoration />
    </SidebarProvider>
  );
}
