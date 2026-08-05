"use client";

import { cn } from "@/lib/utils";
import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

function Switch({ className, ...props }: SwitchPrimitive.Root.Props) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer group/switch relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-all duration-200 outline-none",
        "focus-visible:border-cyan-400 focus-visible:ring-3 focus-visible:ring-cyan-400/50",
        "data-checked:bg-cyan-400 data-unchecked:bg-gray-200",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block size-5 rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 data-checked:translate-x-6 data-unchecked:translate-x-1"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
