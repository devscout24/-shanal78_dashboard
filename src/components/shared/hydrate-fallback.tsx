import { Loader2, ShieldCheck, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function HydrateFallback() {
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 95) {
          clearInterval(timer);
          return 95;
        }
        const diff = Math.floor(Math.random() * 12) + 4;
        return Math.min(oldProgress + diff, 95);
      });
    }, 250);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-12">
      {/* Background Decorative Glows */}
      <div className="bg-primary/5 pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-secondary/5 pointer-events-none absolute -right-40 -bottom-40 h-96 w-96 rounded-full blur-3xl" />

      {/* Main Content Card */}
      <div className="border-border bg-card shadow-blue text-card-foreground relative w-full max-w-md rounded-2xl border p-8">
        <div className="flex flex-col items-center text-center">
          {/* Animated Branding Icon */}
          <div className="bg-primary/10 text-primary relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
            <div className="border-primary/20 absolute inset-0 animate-ping rounded-2xl border opacity-25" />
            <Zap className="text-primary h-8 w-8" />
          </div>

          {/* Heading */}
          <h1 className="text-foreground font-sans text-xl font-bold tracking-tight">
            Loading Dashboard
          </h1>
          <p className="text-muted-foreground mt-2 font-mono text-sm">
            Preparing your workspace, syncing application state, and
            establishing secure connections...
          </p>

          {/* Spinner and Status Indicator */}
          <div className="mt-8 flex w-full flex-col items-center gap-3">
            <div className="flex w-full items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <Loader2 className="text-primary h-4 w-4 animate-spin" />
                <span className="text-foreground font-mono text-xs font-semibold tracking-wide">
                  Hydrating application...
                </span>
              </div>
              <span className="text-muted-foreground font-mono text-xs font-medium">
                {progress}%
              </span>
            </div>

            {/* Dynamic Loading Bar */}
            <div className="bg-muted h-1.5 w-full overflow-hidden rounded-full">
              <div
                className="from-primary to-secondary h-full rounded-full bg-linear-to-r transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Footer Security / Trust Note */}
          <div className="text-muted-foreground mt-8 flex items-center gap-1.5 text-xs">
            <ShieldCheck className="text-secondary h-3.5 w-3.5" />
            <span>Secure Enterprise Environment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
