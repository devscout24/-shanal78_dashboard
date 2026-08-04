import { Button } from "@/components/ui/button";
import { SidebarGroupContent } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Link, NavLink } from "react-router";

export default function Sidebar() {
  return (
    <>
      <Link to="/compliance-chat" className="w-full">
        <Button className="from-primary to-secondary shadow-blue h-11 w-[111.797px] cursor-pointer rounded-full bg-linear-to-r p-3 font-mono text-sm leading-5 font-semibold">
          <span>+</span>
          <span>New Chat</span>
        </Button>
      </Link>

      <SidebarGroupContent className="mt-3 space-y-4">
        <h4 className="text-muted-foreground font-mono text-xs leading-4.5 font-semibold tracking-[0.96px] uppercase">
          RECENT CHATS
        </h4>

        <div>
          {conversations.map((conversation) => (
            <NavLink
              to={`/compliance-chat/${conversation.id}`}
              key={conversation.id}
              className={({ isActive }) =>
                cn(
                  "text-sidebar-primary-foreground line-clamp-1 font-sans text-base leading-6 font-medium",
                  {
                    "text-[#68a0ff]": isActive,
                  },
                )
              }
            >
              {conversation.title}
            </NavLink>
          ))}
        </div>
      </SidebarGroupContent>
    </>
  );
}

const conversations = [
  {
    id: 1,
    title:
      "An Employee's Guide to Compliance: Navigating the Rules and Regulations",
  },
];
