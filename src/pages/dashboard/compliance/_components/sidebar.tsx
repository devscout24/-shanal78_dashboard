import { Button } from "@/components/ui/button";
import { SidebarGroupContent } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { faker } from "@faker-js/faker";
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

        <div className="space-y-1">
          {conversations.map((conversation) => (
            <NavLink
              to={`/compliance-chat/${conversation.id}`}
              key={conversation.id}
              className={({ isActive }) =>
                cn(
                  "text-sidebar-primary-foreground line-clamp-1 rounded-sm px-2 py-1 font-sans text-base leading-6 font-medium",
                  {
                    "bg-muted": isActive,
                  },
                )
              }
            >
              {({ isActive }) => (
                <span>
                  {isActive && <span>●</span>} <span>{conversation.title}</span>
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </SidebarGroupContent>
    </>
  );
}

const conversations = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence(),
}));
