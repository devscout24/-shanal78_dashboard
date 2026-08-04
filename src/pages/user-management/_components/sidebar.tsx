import { SidebarGroupContent } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <SidebarGroupContent className="mt-3 space-y-4">
      <h4 className="text-muted-foreground font-mono text-xs leading-4.5 font-semibold tracking-[0.96px] uppercase">
        ACCOUNT MANAGEMENT
      </h4>

      <div className="space-y-1">
        {menu.map((conversation) => (
          <NavLink
            to={conversation.url}
            key={conversation.title}
            className={({ isActive }) =>
              cn(
                "text-sidebar-primary-foreground line-clamp-1 flex items-center px-2 py-0.5 font-sans text-base leading-6 font-medium",
                {
                  "border-sidebar-primary-foreground border-l-3 font-semibold":
                    isActive,
                },
              )
            }
          >
            <span>{conversation.title}</span>
          </NavLink>
        ))}
      </div>
    </SidebarGroupContent>
  );
}

const menu = [
  {
    title: "Profile",
    url: "/user-management/profile",
  },
  {
    title: "Password",
    url: "/user-management/password",
  },
  {
    title: "Billing",
    url: "/user-management/billing",
  },
  {
    title: "Notifications",
    url: "/user-management/notifications",
  },
];
