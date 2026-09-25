import { Button } from "@/components/ui/button";
import RemoveState from "./remove-state";

export default function StateCoverage() {
  return (
    <>
      <div className="rounded-[12px] border border-[#E9EAEB] p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#101828]">State Coverage</h2>
            <p className="text-[13px] text-[#899AB3]">
              Federal always included · 3 of 20 states used
            </p>
          </div>

          <Button className="from-primary to-secondary h-9 w-[111.797px] cursor-pointer rounded-[8px] bg-linear-to-r px-4.5 font-mono text-sm leading-5 font-semibold">
            <span>+</span>
            <span>Add state</span>
          </Button>
        </div>

        <ul className="mt-4">
          {states.map((state) => (
            <li className="flex items-center justify-between border-[#E9EAEB] py-3 text-sm font-medium not-last:border-b">
              <span>{state}</span>
              <RemoveState state={state} />
            </li>
          ))}
        </ul>
      </div>

      <p className="text-[13px] text-[#899AB3]">
        Want to cancel instead?{" "}
        <a href="#" className="text-red-500 hover:underline">
          Cancel subscription
        </a>
      </p>
    </>
  );
}

const states = ["California", "Texas", "Florida"];
