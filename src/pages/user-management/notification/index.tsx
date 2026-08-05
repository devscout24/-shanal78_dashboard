import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import GeneralNotification from "./_component/general-notificaion";
import SummeryNotification from "./_component/summery-notification";

export default function Notification() {
  return (
    <>
      <header className="sticky top-0 flex shrink-0 items-center justify-between gap-2">
        <h2 className="font-sans text-2xl leading-8 font-bold tracking-[-0.72px]">
          Notifications
        </h2>
        <div className="flex items-center gap-2">
          <Search className="mr-2 h-4 w-4" />
          <SidebarTrigger />
        </div>
      </header>

      <div className="border-border mt-8 flex w-full items-center justify-between border-b pb-5">
        <div>
          <h4 className="font-sans text-sm leading-5 font-semibold">
            Manage your notifications
          </h4>
          <p className="text-muted-foreground font-sans text-sm leading-5 font-normal">
            Select how and when you are notified.
          </p>
        </div>

        <Button variant="link" size="icon" className="cursor-pointer">
          <Icon src="/icons/dots-vertical.svg" className="size-4" />
        </Button>
      </div>

      <div className="border-border flex w-full border-b py-5">
        <div className="max-w-xs">
          <h4 className="font-sans text-sm leading-5 font-semibold">
            General notifications
          </h4>
          <p className="text-muted-foreground font-sans text-sm leading-5 font-normal">
            Select when you’ll be notified when the following changes occur.
          </p>
        </div>

        <div className="flex-1">
          <GeneralNotification />
        </div>
      </div>

      <div className="border-border flex w-full border-b py-5">
        <div className="max-w-xs">
          <h4 className="font-sans text-sm leading-5 font-semibold">
            Summary notifications
          </h4>
          <p className="text-muted-foreground font-sans text-sm leading-5 font-normal">
            Select when you’ll be notified when the following summaries or
            report are ready.
          </p>
        </div>

        <div className="flex-1">
          <SummeryNotification />
        </div>
      </div>
    </>
  );
}
