import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { cn } from "@/lib/utils";
import { Check, ScrollText, UserRound, UsersRound } from "lucide-react";
import { Controller } from "react-hook-form";
import useOnboardingForm from "./use-state-form";

export default function Packages({
  form,
}: {
  form: ReturnType<typeof useOnboardingForm>["form"];
}) {
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
                    "flex-1 space-y-3 rounded-2xl border-2 border-[#E5EBF2] px-5 py-6",
                    {
                      "border-[#00B5C6] bg-[#E6F8F9]": plan.recommended,
                    },
                  )}
                >
                  <h2 className="flex items-center gap-1.75 text-lg font-semibold text-[#10172A]">
                    <plan.icon className="text-secondary size-4" />
                    <span>{plan.name}</span>
                  </h2>

                  <h3 className="text-[28px] font-semibold text-[#10172A]">
                    ${plan.price}
                    <span className="text-[13px] font-medium text-[#475467]">
                      /month
                    </span>
                  </h3>

                  <p className="text-[11.5px] font-medium text-[#00B5C6]">
                    {plan.discount}
                  </p>
                  <p className="text-[13px] font-medium text-[#475467]">
                    {plan.users}
                  </p>
                  <p className="text-[13px] font-semibold text-[#00B5C6]">
                    {plan.states}
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

                  <Button
                    className={cn(
                      "h-10 w-full cursor-pointer rounded-xl border border-black bg-transparent text-sm font-semibold text-black",
                      {
                        "border-0 bg-[linear-gradient(270deg,#00B5C6_0%,#02519E_100%)] text-white hover:bg-[linear-gradient(270deg,#00B5C6_0%,#02519E_100%)]":
                          plan.recommended,
                        // ← highlight selected plan
                        "border-[#00B5C6] bg-[#E6F8F9] text-[#00B5C6]":
                          field.value?.id === plan.id && !plan.recommended,
                        "ring-2 ring-white ring-offset-2":
                          field.value?.id === plan.id && plan.recommended,
                      },
                    )}
                    onClick={() =>
                      field.onChange({
                        id: plan.id,
                        name: plan.name,
                        price: plan.price,
                        stateLimit: plan.stateLimit,
                      })
                    }
                  >
                    {field.value?.id === plan.id ? "Selected ✓" : "Select plan"}
                  </Button>
                </div>
              ))}
            </div>
          </Field>
        )}
      />
    </div>
  );
}

const plans = [
  {
    id: 1,
    name: "Individual",
    icon: UserRound,
    price: 250,
    discount: "$2,500/yr (2 months free)",
    users: "1 user",
    states: "Federal + up to 3 states",
    stateLimit: 3,
    features: [
      "Platform + AI assistant",
      "Document templates",
      "Resource library",
      "Limited email support",
    ],
  },

  {
    id: 2,
    name: "Team",
    icon: UsersRound,
    price: 450,
    discount: "$4,500/yr (2 months free)",
    users: "2–4 users",
    states: "Federal + up to 20 states",
    stateLimit: 20,
    features: [
      "Everything in Individual",
      "Collaboration & permissions",
      "Shared workspace",
      "Reporting",
    ],
    recommended: true,
  },

  {
    id: 3,
    name: "Enterprise",
    icon: ScrollText,
    price: 750,
    discount: "Custom yearly quote",
    users: "5+ users",
    states: "Federal + all states",
    features: [
      "Everything in Team",
      "Unlimited users, admin",
      "Analytics & API access",
      "SSO + premium support",
    ],
  },
];
