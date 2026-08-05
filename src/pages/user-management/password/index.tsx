import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Search } from "lucide-react";
import { useFetcher } from "react-router";

export default function Password() {
  const fetcher = useFetcher();

  return (
    <>
      <header className="sticky top-0 flex shrink-0 items-center justify-between gap-2">
        <h2 className="font-sans text-2xl leading-8 font-bold tracking-[-0.72px]">
          Password
        </h2>
        <div className="flex items-center gap-2">
          <Search className="mr-2 h-4 w-4" />
          <SidebarTrigger className="-ml-1" />
        </div>
      </header>

      <div className="mt-8 w-fit">
        <h4 className="font-sans text-sm leading-5 font-semibold">
          Manage your password
        </h4>
        <p className="text-muted-foreground font-sans text-sm leading-5 font-normal">
          Please enter your current password to change your password.
        </p>
      </div>

      <div>
        <fetcher.Form method="post" action="/user-management/password">
          <div className="mt-8">
            <div className="border-border border-t py-4">
              <fieldset className="flex max-w-6xl justify-between">
                <Label
                  htmlFor="name"
                  className="text-card-foreground font-sans text-sm leading-5 font-semibold"
                >
                  Current password*
                </Label>
                <div className="relative w-full max-w-120">
                  <Input
                    placeholder="•••••••••"
                    className="border-border placeholder:text-muted-foreground h-11 rounded-[10px] border-2 px-3.5 py-2.5 font-sans text-sm shadow-xs placeholder:font-sans placeholder:text-sm"
                    type="password"
                    name="current-password"
                  />
                </div>
              </fieldset>
            </div>

            <div className="border-border border-t py-4">
              <fieldset className="flex max-w-6xl justify-between">
                <Label
                  htmlFor="name"
                  className="text-card-foreground font-sans text-sm leading-5 font-semibold"
                >
                  New password*
                </Label>
                <div className="relative w-full max-w-120">
                  <Input
                    placeholder="•••••••••"
                    className="border-border placeholder:text-muted-foreground h-11 rounded-[10px] border-2 px-3.5 py-2.5 font-sans text-sm shadow-xs placeholder:font-sans placeholder:text-sm"
                    type="password"
                    name="new-password"
                  />
                </div>
              </fieldset>
            </div>

            <div className="border-border border-t py-4">
              <fieldset className="flex max-w-6xl justify-between">
                <Label
                  htmlFor="name"
                  className="text-card-foreground font-sans text-sm leading-5 font-semibold"
                >
                  Confirm new password*
                </Label>
                <div className="relative w-full max-w-120">
                  <Input
                    placeholder="•••••••••"
                    className="border-border placeholder:text-muted-foreground h-11 rounded-[10px] border-2 px-3.5 py-2.5 font-sans text-sm shadow-xs placeholder:font-sans placeholder:text-sm"
                    type="password"
                    name="confirm-new-password"
                  />
                </div>
              </fieldset>
            </div>
          </div>

          <div className="border-border mt-6 flex items-center justify-end gap-3 border-t p-6">
            <Button
              variant="outline"
              className="h-10 cursor-pointer border-2 border-[#D5D7DA]! bg-white px-4 py-2 font-sans text-sm leading-5 font-semibold"
              type="reset"
              disabled={fetcher.state === "submitting"}
            >
              Cancel
            </Button>
            <Button
              className="from-primary to-secondary h-10 cursor-pointer bg-linear-to-r px-4 py-2 font-sans text-sm leading-5 font-semibold"
              type="submit"
              disabled={fetcher.state === "submitting"}
            >
              Update password
            </Button>
          </div>
        </fetcher.Form>
      </div>
    </>
  );
}
