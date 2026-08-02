import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { useFetcher, useLocation } from "react-router";

export default function Google() {
  const { state } = useLocation();
  const fetcher = useFetcher();

  return (
    <Button
      variant="outline"
      type="button"
      className="ring-border h-11 w-full cursor-pointer rounded-[10px] px-6 py-3 font-sans text-sm leading-5 font-semibold shadow-xl ring-2"
      onClick={() =>
        fetcher.load(`/auth/login-with-google?from=${state?.from || "/"}`)
      }
      disabled={fetcher.state === "loading"}
    >
      <Icon src="/icons/google.svg" className="size-6" />

      <span> Sign in with Google</span>
    </Button>
  );
}
