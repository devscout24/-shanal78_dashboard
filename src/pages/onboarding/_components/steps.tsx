import { cn } from "@/lib/utils";

export default function Steps({ activeId }: { activeId: number }) {
  return (
    <div className="mt-9.5 flex w-full justify-between gap-4">
      {steps.map((step) => (
        <div key={step.id} className={cn("flex-1 pt-2")}>
          <h3
            className={cn("text-sm leading-5 font-semibold text-black", {
              "text-secondary": step.id === activeId,
            })}
          >
            {step.name}
          </h3>
          <p
            className={cn("text-sm leading-5 font-normal text-black", {
              "text-secondary": step.id === activeId,
            })}
          >
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}

const steps = [
  {
    id: 1,
    name: "Your details",
    description: "Please provide your name and email",
  },
  {
    id: 2,
    name: "Plan & States (NEW)",
    description: "Choose a plan tier, then select states",
  },
  {
    id: 3,
    name: "Payment Information",
    description: "Please provide credit card",
  },
  {
    id: 4,
    name: "Terms & Conditions",
    description: "Please review your details and subscription.",
  },
];
