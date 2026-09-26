import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Check, ScrollText, UserRound, UsersRound } from "lucide-react";

export default function ChangePlan() {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer rounded-[8px] border-2 border-[#E9EAEB] px-4.5 py-2.5 text-sm font-medium text-[#101828]">
        Upgrade / Downgrade plan
      </DialogTrigger>
      <DialogContent className="w-full sm:max-w-7xl">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-[#101828]">
            Change your plan
          </DialogTitle>
          <DialogDescription className="text-sm text-[#899AB3]">
            You're currently on the Team plan. Changing plans updates your
            billing and state cap immediately.
          </DialogDescription>
        </DialogHeader>

        <div className="flex gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "flex-1 space-y-3 rounded-2xl border-2 border-[#E5EBF2] px-5 py-6",
                {
                  "border-[#00B5C6] bg-[#E6F8F9]": plan.active,
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
                    <Check className="size-3 text-[#00B5C6]" strokeWidth={3} />
                    <span> {feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  "h-10 w-full cursor-pointer rounded-xl border border-black bg-transparent text-sm font-semibold text-black disabled:bg-white disabled:text-[#899AB3]",
                )}
                disabled={plan.active}
              >
                {plan.active ? "Current Plan" : plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
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
    buttonText: "Downgrade to Individual",
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
    active: true,
    buttonText: "Upgrade to Team",
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
    buttonText: "Upgrade to Enterprise",
  },
];
