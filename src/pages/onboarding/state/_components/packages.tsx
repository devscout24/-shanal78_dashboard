import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import type { PlanDto, YearlyDiscountDto } from "@/types/plan";
import { Check } from "lucide-react";
import { Controller } from "react-hook-form";
import { useLoaderData } from "react-router";
import ContactUs from "./contact-us";
import useOnboardingForm from "./use-state-form";

export default function Packages({
  form,
}: {
  form: ReturnType<typeof useOnboardingForm>["form"];
}) {
  const { plans, yearly_discount } = useLoaderData<{
    plans: PlanDto[];
    yearly_discount: YearlyDiscountDto;
  }>();

  if (!plans || plans.length === 0) {
    return (
      <div className="mt-10 flex items-center justify-center rounded-2xl border-2 border-[#E5EBF2] bg-white p-6">
        <p className="text-sm font-medium text-[#475467]">
          No plans available at the moment. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <div className="flex items-center gap-2">
        <div className="flex w-fit items-center rounded-full bg-[#E6F8F9] p-1">
          <p className="px-4.5 py-2 text-[13px] font-semibold text-[#10172A]">
            Monthly
          </p>
          <p className="rounded-full bg-[linear-gradient(270deg,#00B5C6_0%,#02519E_100%)] px-4.5 py-2 text-[13px] font-semibold text-white">
            Yearly
          </p>
        </div>

        <p className="text-secondary rounded-full bg-[#E6F8F9] px-2.5 py-1 text-[11.5px] font-semibold">
          2 months free — save ~16.7%
        </p>
      </div>

      <Controller
        name="package"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <div className="mt-10 flex items-stretch gap-5 rounded-2xl border-2 border-[#E5EBF2] bg-white p-6">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={cn(
                    // Removed h-full so flex-1 and items-stretch can equalize card heights
                    "flex flex-1 flex-col justify-between rounded-2xl border-2 border-[#E5EBF2] px-5 py-6",
                    // {
                    //   "border-[#00B5C6] bg-[#E6F8F9]": plan.recommended,
                    // },
                  )}
                >
                  {/* Top content section wrapped together */}
                  <div className="space-y-3">
                    <h2 className="flex items-center gap-1.75 text-lg font-semibold text-[#10172A] capitalize">
                      {/* <plan.icon className="text-secondary size-4" /> */}
                      <span>{plan.name}</span>
                    </h2>

                    <h3 className="text-[28px] font-semibold text-[#10172A] capitalize">
                      {plan.monthly_price ? (
                        <>
                          ${plan.monthly_price}
                          <span className="text-[13px] font-medium text-[#475467]">
                            /month
                          </span>
                        </>
                      ) : (
                        "Contact us"
                      )}
                    </h3>

                    <p className="text-[11.5px] font-medium text-[#00B5C6] capitalize">
                      {plan.yearly_price
                        ? `${plan.yearly_price}/yr (${yearly_discount.months_free} months free)`
                        : "contact us for pricing"}
                    </p>
                    <p className="text-[13px] font-medium text-[#475467] capitalize">
                      {(plan.user_max === 1 && "1 user") ||
                        (plan.user_min === 2 &&
                          `${plan.user_min}-${plan.user_max} users`) ||
                        (plan.user_min > 2 && `${plan.user_min}+ users`)}
                    </p>

                    <p className="text-[13px] font-semibold text-[#00B5C6] capitalize">
                      {plan.state_cap ? `${plan.state_cap} ` : "Unlimited "}
                      states
                    </p>

                    <ul className="mt-3 space-y-1.5 border-t border-[#E5EBF2] pt-3">
                      {plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-[12.5px] font-medium text-[#475467]"
                        >
                          <Check
                            className="size-3 text-[#00B5C6]"
                            strokeWidth={3}
                          />
                          <span> {feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button stays neatly pushed to the bottom */}

                  {plan.id === "enterprise" ? (
                    <ContactUs />
                  ) : (
                    <Button
                      className={cn(
                        "mt-6 h-10 w-full cursor-pointer rounded-xl border border-black bg-transparent text-sm font-semibold text-black",
                        {
                          "ring-2 ring-white ring-offset-2":
                            field.value?.id === plan.id,
                        },
                      )}
                      onClick={() =>
                        field.onChange({
                          id: plan.id,
                          name: plan.name,
                          price: plan.monthly_price,
                          stateLimit: plan.state_cap,
                        })
                      }
                    >
                      {field.value?.id === plan.id
                        ? "Selected ✓"
                        : "Select plan"}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </Field>
        )}
      />
    </div>
  );
}
