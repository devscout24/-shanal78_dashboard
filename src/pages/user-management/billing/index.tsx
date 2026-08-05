import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import Plans from "./_components/plans";

export default function Billing() {
  return (
    <>
      <header className="sticky top-0 flex shrink-0 items-center justify-between gap-2">
        <h2 className="font-sans text-2xl leading-8 font-bold tracking-[-0.72px]">
          Password
        </h2>
        <div className="flex items-center gap-2">
          <Search className="mr-2 h-4 w-4" />
          <SidebarTrigger />
        </div>
      </header>

      <div className="border-border mt-8 flex w-full items-center justify-between border-b pb-5">
        <div>
          <h4 className="font-sans text-sm leading-5 font-semibold">
            Account plans
          </h4>
          <p className="text-muted-foreground font-sans text-sm leading-5 font-normal">
            Pick an account plan that fits your workflow.
          </p>
        </div>

        <Button variant="link" size="icon" className="cursor-pointer">
          <Icon src="/icons/dots-vertical.svg" className="size-4" />
        </Button>
      </div>

      <div className="flex w-full py-5">
        <div className="max-w-xs">
          <h4 className="font-sans text-sm leading-5 font-semibold">
            Current plan
          </h4>
          <p className="text-muted-foreground font-sans text-sm leading-5 font-normal">
            We’ll credit your account if you need to downgrade during the
            billing cycle.
          </p>
        </div>

        <div className="flex-1">
          <Plans />
        </div>
      </div>

      <div className="border-border mt-8 flex w-full items-center justify-between border-b pb-5">
        <div>
          <h4 className="font-sans text-sm leading-5 font-semibold">
            Billing and invoicing
          </h4>
          <p className="text-muted-foreground font-sans text-sm leading-5 font-normal">
            Pick an account plan that fits your workflow.
          </p>
        </div>

        <Button className="text-foreground h-10 cursor-pointer border-2 border-[#D5D7DA]! bg-white px-4 py-2 font-sans text-sm leading-5 font-semibold">
          <Icon src="/icons/download-cloud.svg" className="size-5" />
          <span> Download all</span>
        </Button>
      </div>
    </>
  );
}
