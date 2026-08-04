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
        <fetcher.Form method="post" action="/">
          <div className="mt-8 space-y-5">
            <fieldset className="space-y-1.75">
              <Label
                htmlFor="name"
                className="text-card-foreground font-sans text-sm leading-5 font-medium"
              >
                Name
              </Label>
              <div className="relative">
                <Input
                  placeholder="Enter your name"
                  className="border-border placeholder:text-muted-foreground h-11 rounded-[10px] border-2 px-3.5 py-2.5 font-sans text-sm shadow-xs placeholder:font-sans placeholder:text-sm"
                  type="text"
                  name="name"
                />
              </div>
            </fieldset>

            <fieldset className="space-y-1.75">
              <Label
                htmlFor="email"
                className="text-card-foreground font-sans text-sm leading-5 font-medium"
              >
                Email
              </Label>
              <div className="relative">
                <Input
                  placeholder="Enter your email"
                  className="border-border placeholder:text-muted-foreground h-11 rounded-[10px] border-2 px-3.5 py-2.5 font-sans text-sm shadow-xs placeholder:font-sans placeholder:text-sm"
                  type="email"
                  name="email"
                />
              </div>
            </fieldset>

            <fieldset className="space-y-1.75">
              <Label
                htmlFor="phone"
                className="text-card-foreground font-sans text-sm leading-5 font-medium"
              >
                Phone
              </Label>
              <div className="relative">
                <Input
                  placeholder="Enter your phone number"
                  className="border-border placeholder:text-muted-foreground h-11 rounded-[10px] border-2 px-3.5 py-2.5 font-sans text-sm shadow-xs placeholder:font-sans placeholder:text-sm"
                  type="tel"
                  name="phone"
                />
              </div>
            </fieldset>

            <fieldset className="space-y-1.75">
              <Label
                htmlFor="password"
                className="text-card-foreground font-sans text-sm leading-5 font-medium"
              >
                Password
              </Label>
              <div className="relative">
                <Input
                  placeholder="Enter your password"
                  className="border-border placeholder:text-muted-foreground h-11 rounded-[10px] border-2 px-3.5 py-2.5 font-sans text-sm shadow-xs placeholder:font-sans placeholder:text-sm"
                  type="password"
                  name="password"
                />
              </div>
            </fieldset>

            <fieldset className="space-y-1.75">
              <Label
                htmlFor="confirm-password"
                className="text-card-foreground font-sans text-sm leading-5 font-medium"
              >
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  placeholder="Enter your password"
                  className="border-border placeholder:text-muted-foreground h-11 rounded-[10px] border-2 px-3.5 py-2.5 font-sans text-sm shadow-xs placeholder:font-sans placeholder:text-sm"
                  type="password"
                  name="confirm-password"
                />
              </div>
            </fieldset>
          </div>

          <Button
            type="submit"
            className="from-primary to-secondary my-5 h-11 w-full cursor-pointer rounded-[10px] bg-linear-to-r px-6 py-3 font-sans text-sm leading-5 font-semibold text-white shadow-xl"
            disabled={fetcher.state === "submitting"}
          >
            Get Started
          </Button>
        </fetcher.Form>
      </div>
    </>
  );
}
