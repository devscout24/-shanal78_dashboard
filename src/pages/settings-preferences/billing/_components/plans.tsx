import Icon from "@/components/shared/Icon";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useSubmit } from "react-router";

type Plan = {
  id: "basic" | "business" | "enterprise";
  name: string;
  price: string;
  description: string;
  icon: string;
};

export default function Plans() {
  const [selected, setSelected] = useState<Plan["id"]>("basic");
  const submit = useSubmit();

  const handleChange = (id: Plan["id"]) => {
    setSelected(id);
    submit({ id }, { action: "/user-management/billing", method: "post" });
  };

  return (
    <div className="flex w-full flex-col gap-3">
      {plans.map((plan: Plan) => {
        const isSelected = selected === plan.id;
        return (
          <label
            key={plan.id}
            htmlFor={plan.id}
            className={cn(
              "flex cursor-pointer items-center gap-4 rounded-lg border-2 bg-white p-4 transition-colors",
              isSelected ? "border-cyan-400" : "border-transparent shadow-sm",
            )}
          >
            <span className="border-border flex items-center justify-center rounded-lg border p-2">
              <Icon src={plan.icon} className="size-5" />
            </span>

            <span className="flex-1">
              <p className="font-sans text-sm font-semibold text-gray-900">
                {plan.name}{" "}
                <span className="font-normal text-gray-500">{plan.price}</span>
              </p>
              <p className="font-sans text-sm text-gray-500">
                {plan.description}
              </p>
            </span>

            <input
              type="radio"
              id={plan.id}
              name="plan"
              value={plan.id}
              checked={isSelected}
              onChange={() => handleChange(plan.id)}
              className="hidden"
            />

            <span
              className={cn(
                "flex size-5 items-center justify-center rounded-md border-2 transition-colors",
                isSelected
                  ? "border-cyan-400 bg-cyan-400"
                  : "border-gray-300 bg-white",
              )}
            >
              {isSelected && (
                <svg viewBox="0 0 12 10" className="size-3" fill="none">
                  <path
                    d="M1 5l3.5 3.5L11 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </label>
        );
      })}
    </div>
  );
}

const plans: Plan[] = [
  {
    id: "basic",
    name: "Basic plan",
    price: "$10/month",
    description:
      "Includes up to 10 users, 20 GB individual data and access to all features.",
    icon: "/icons/layers-two.svg",
  },
  {
    id: "business",
    name: "Business plan",
    price: "$20/month",
    description:
      "Includes up to 20 users, 40 GB individual data and access to all features.",
    icon: "/icons/layers-two.svg",
  },
  {
    id: "enterprise",
    name: "Enterprise plan",
    price: "$40/month",
    description:
      "Unlimited users, unlimited individual data and access to all features.",
    icon: "/icons/zap.svg",
  },
];
