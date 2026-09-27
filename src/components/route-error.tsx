import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { isRouteErrorResponse, Link, useRouteError } from "react-router";

export default function RouteError() {
  const error = useRouteError();

  let errorMessage = "An unexpected error occurred.";
  let errorStatus = "500";

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status.toString();
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return (
    <div className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-12">
      {/* Background Glows */}
      <div className="bg-destructive/5 pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-primary/5 pointer-events-none absolute -right-40 -bottom-40 h-96 w-96 rounded-full blur-3xl" />

      {/* Main Card */}
      <div className="border-border bg-card shadow-blue text-card-foreground relative w-full max-w-md rounded-2xl border p-8 text-center">
        {/* Error Icon */}
        <div className="bg-destructive/10 text-destructive mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
          <AlertTriangle className="h-8 w-8" />
        </div>

        <span className="bg-destructive/10 text-destructive mb-3 inline-block rounded-full px-3 py-1 font-mono text-xs font-semibold">
          Error {errorStatus}
        </span>

        <h1 className="text-foreground font-sans text-xl font-bold tracking-tight">
          Something went wrong
        </h1>
        <p className="text-muted-foreground mt-2 font-mono text-sm">
          {errorMessage}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-3">
          <button
            onClick={() => window.location.reload()}
            className="bg-primary text-primary-foreground flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-sans text-sm font-medium shadow-sm transition-opacity hover:opacity-90"
          >
            <RefreshCw className="h-4 w-4" />
            Retry
          </button>
          <Link
            to="/"
            className="border-border bg-card text-foreground hover:bg-muted/50 flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 font-sans text-sm font-medium transition-colors"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
