import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MoveRight } from "lucide-react";
import { Link, useFetcher, useLocation } from "react-router";
import Google from "./_components/google";

export default function Signup() {
  const fetcher = useFetcher();
  const { state } = useLocation();

  return (
    <section className="grid place-items-center py-16">
      <div className="ring-ring w-full max-w-sm rounded-[16px] p-10 shadow-xl ring-2">
        <fetcher.Form
          method="post"
          action={`/auth/register?from=${state?.from || "/"}`}
        >
          <div className="flex flex-col items-center">
            <img src="/images/auth-logo.png" className="h-[83.93] w-[92]" />

            <h3 className="mt-6 text-center font-sans text-3xl leading-[37.5px] font-semibold">
              Sign up
            </h3>
            <p className="text-muted-foreground mt-1.5 font-sans text-sm leading-5 font-normal">
              Please enter your details.
            </p>

            <div className="bg-muted mt-6 flex w-full cursor-pointer items-center rounded-lg border-2 p-0.5">
              <Button className="border-border h-10 flex-1 cursor-pointer border-2 bg-white! font-sans text-sm leading-5 font-semibold text-[#414651]">
                Sign up
              </Button>

              <Link to="/auth/login" className="flex-1">
                <Button
                  variant="link"
                  className="text-muted-foreground h-10 w-full flex-1 font-sans text-sm leading-5 font-semibold"
                >
                  Log in
                </Button>
              </Link>
            </div>
          </div>

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
          <Link
            to="/auth/forgot-password"
            className="text-primary mt-5 inline-block text-sm font-medium hover:underline"
          >
            Forgot Password?
          </Link>

          <Button
            type="submit"
            className="from-primary to-secondary my-5 h-11 w-full cursor-pointer rounded-[10px] bg-linear-to-r px-6 py-3 font-sans text-sm leading-5 font-semibold text-white shadow-xl"
            disabled={fetcher.state === "submitting"}
          >
            <span>Get Started</span> <MoveRight />
          </Button>
          <Google />
        </fetcher.Form>
      </div>
    </section>
  );
}
