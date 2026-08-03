import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFetcher } from "react-router";

export default function ForgotPassword() {
  const fetcher = useFetcher();

  return (
    <section className="grid place-items-center py-16">
      <div className="ring-ring w-full max-w-sm rounded-[16px] p-10 shadow-xl ring-2">
        <fetcher.Form method="post" action="/auth/forgot-password">
          <div className="flex flex-col items-center">
            <img src="/images/auth-logo.png" className="h-[83.93] w-[92]" />

            <h3 className="mt-6 text-center font-sans text-3xl leading-[37.5px] font-semibold">
              Forgot your password?
            </h3>
            <p className="text-muted-foreground mt-1.5 text-center font-sans text-sm leading-5 font-normal">
              We'll send you an email with instructions to reset your password.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            <fieldset className="space-y-1.75">
              <Label
                htmlFor="email"
                className="text-card-foreground font-sans text-sm leading-5 font-medium"
              >
                Username / Email
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
          </div>

          <Button
            type="submit"
            className="from-primary to-secondary shadow-blue my-5 h-11 w-full cursor-pointer rounded-[10px] bg-linear-to-r px-6 py-3 font-sans text-sm leading-5 font-semibold text-white"
            disabled={fetcher.state === "submitting"}
          >
            Send Reset Link
          </Button>
        </fetcher.Form>
      </div>
    </section>
  );
}
