import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSubmit } from "react-router";

export default function PrePrompt({
  message,
  className,
  quickAction,
}: {
  message: string;
  className?: string;
  quickAction?: boolean;
}) {
  const submit = useSubmit();

  const handleClick = () => {
    submit({ message }, { method: "post", action: "/compliance-chat" });
  };

  return quickAction ? (
    <Button
      variant="outline"
      className="ring-ring font-sm h-11 cursor-pointer font-normal ring"
    >
      Payroll and wage regulations
    </Button>
  ) : (
    <Button
      variant="secondary"
      className={cn("cursor-pointer bg-[#E6F8FA] text-[#02519E]", className)}
      onClick={handleClick}
    >
      Help me write my prompt
    </Button>
  );
}
