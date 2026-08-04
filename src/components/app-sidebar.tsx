"use client";

import * as React from "react";

import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router";
import Icon from "./shared/Icon";

// This is sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: "/icons/speedometer.svg",
    },
    {
      title: "Compliance Chat",
      url: "/compliance-chat",
      icon: "/icons/message.svg",
    },
    {
      title: "My Subscription",
      url: "/my-subscription",
      icon: "/icons/clipboard.svg",
    },
    {
      title: "User Management",
      url: "/user-management",
      icon: "/icons/users.svg",
    },
    {
      title: "Settings & Preferences",
      url: "/settings-preferences",
      icon: "/icons/settings.svg",
    },
  ],

  conversations: [
    {
      id: 1,
      title:
        "An Employee's Guide to Compliance: Navigating the Rules and Regulations",
    },
  ],
};

export function AppSidebar({
  children,
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden group-data-[side=left]:border-r-0 *:data-[sidebar=sidebar]:flex-row"
      {...props}
    >
      <Sidebar
        collapsible="none"
        className="w-[calc(var(--sidebar-width-icon)+5px)]!"
      >
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="lg"
                className="bg-transparent! p-0"
                render={<a href="#" />}
              >
                <div className="flex aspect-square size-10 items-center justify-center rounded-lg">
                  <img src="/images/dashboard-logo.png" alt="Logo" />
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="flex flex-col items-center gap-6">
            {data.navMain.map((item) => (
              <NavLink
                to={item.url}
                className="flex w-full cursor-pointer items-center justify-center gap-2"
                key={item.title}
                title={item.title}
              >
                {({ isActive }) => (
                  <Icon
                    src={item.icon}
                    className={cn(
                      "grid size-5 cursor-pointer place-content-center",
                      {
                        "text-[#68a0ff]": isActive,
                      },
                    )}
                  />
                )}
              </NavLink>
            ))}
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <NavUser />
        </SidebarFooter>
      </Sidebar>

      <Sidebar
        collapsible="none"
        className="hidden flex-1 space-y-5 bg-white md:flex"
      >
        <SidebarHeader className="flex flex-row items-center justify-between gap-3.5 p-4">
          <div className="w-full">
            <div className="h-15 w-37">
              <img src="/images/logo.png" alt="Logo" className="w-full" />
            </div>
          </div>

          <SidebarTrigger className="text-black" />
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup className="px-5">
            <SidebarGroupContent className="space-y-4">
              {children}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </Sidebar>
  );
}
