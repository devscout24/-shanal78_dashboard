import { ArrowLeft, FileQuestion, Home } from "lucide-react";
import { Link, useNavigate } from "react-router";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-12">
      {/* Background Decorative Glows */}
      <div className="bg-primary/5 pointer-events-none absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-secondary/5 pointer-events-none absolute -right-40 -bottom-40 h-96 w-96 rounded-full blur-3xl" />

      {/* Main Content Card */}
      <div className="border-border bg-card shadow-blue text-card-foreground relative w-full max-w-md rounded-2xl border p-8 text-center">
        {/* Animated Icon Container */}
        <div className="bg-primary/10 text-primary relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
          <div className="border-primary/20 absolute inset-0 animate-ping rounded-2xl border opacity-25" />
          <FileQuestion className="text-primary h-8 w-8" />
        </div>

        {/* Status Badge */}
        <span className="bg-primary/10 text-primary mb-3 inline-block rounded-full px-3 py-1 font-mono text-xs font-semibold">
          Error 404
        </span>

        {/* Heading */}
        <h1 className="text-foreground font-sans text-xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="text-muted-foreground mt-2 font-mono text-sm">
          Sorry, we couldn’t find the page you’re looking for. It might have
          been moved, deleted, or never existed.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="border-border bg-card text-foreground hover:bg-muted/50 flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border px-4 py-2.5 font-sans text-sm font-medium transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>

          <Link
            to="/"
            className="bg-primary text-primary-foreground flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 font-sans text-sm font-medium shadow-sm transition-opacity hover:opacity-90"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
