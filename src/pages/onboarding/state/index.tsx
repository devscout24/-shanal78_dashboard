import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import StateForm from "./_components/state-form";

export default function Onboarding() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl max-lg:px-2">
        <Card className="w-full border-none bg-transparent ring-0">
          <CardHeader className="flex flex-col p-0">
            <CardTitle className="text-2xl leading-9.5 font-semibold lg:text-3xl">
              Register your account
            </CardTitle>
            <CardDescription> Please enter your details. </CardDescription>
            <CardAction className="w-full">
              <div className="mt-8 flex w-full items-center justify-between gap-4">
                <Button
                  variant="outline"
                  className="cursor-pointer rounded-none"
                  disabled
                  type="button"
                >
                  <Icon src="/icons/arrow-left.svg" />
                  <span>Previous</span>
                </Button>

                <Button
                  className="cursor-pointer rounded-none"
                  form="form-onboarding"
                  type="submit"
                >
                  <span>Next</span>
                  <Icon src="/icons/arrow-bold.svg" />
                </Button>
              </div>
            </CardAction>
            <CardContent className="w-full p-0">
              <div className="mt-9.5 flex w-full justify-between gap-4">
                <div className={cn("flex-1 border-t-4 border-black pt-2")}>
                  <h3
                    className={cn(
                      "text-primary text-sm leading-5 font-semibold",
                    )}
                  >
                    Select your States & Add-Ons
                  </h3>
                  <p
                    className={cn("text-primary text-sm leading-5 font-normal")}
                  >
                    What states do you want to include?
                  </p>
                </div>

                <div className={cn("border-muted flex-1 border-t-4 pt-2")}>
                  <h3
                    className={cn(
                      "text-primary text-sm leading-5 font-semibold",
                    )}
                  >
                    Payment Information
                  </h3>
                  <p
                    className={cn("text-primary text-sm leading-5 font-normal")}
                  >
                    Please provide credit card
                  </p>
                </div>

                <div className={cn("border-muted flex-1 border-t-4 pt-2")}>
                  <h3
                    className={cn(
                      "text-primary text-sm leading-5 font-semibold",
                    )}
                  >
                    Terms & Conditions
                  </h3>
                  <p
                    className={cn("text-primary text-sm leading-5 font-normal")}
                  >
                    Please review your details and subscription.
                  </p>
                </div>
              </div>
              <StateForm />
            </CardContent>

            <CardFooter className="sr-only">
              <Field />
            </CardFooter>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
