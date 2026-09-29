import { Skeleton } from "@/components/ui/skeleton";

export default function AddOnSkelton() {
  return (
    <div className="mt-6 space-y-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="mb-4 last:mb-0">
          <div className="flex w-full items-center justify-between rounded-2xl border-2 border-[#E5EBF2] bg-white p-4">
            {/* Left side: Checkbox + Title & Description */}
            <div className="flex items-center gap-4">
              <Skeleton className="size-5 rounded-md" />

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="size-3.75 rounded-full" />
                  <Skeleton className="h-4 w-32 rounded-md" />
                </div>
                <Skeleton className="h-3 w-48 rounded-md" />
              </div>
            </div>

            {/* Right side: Price & Badge */}
            <div className="flex flex-col items-end gap-1.5">
              <Skeleton className="h-4 w-16 rounded-md" />
              <Skeleton className="h-5 w-24 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
