import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSubmit } from "react-router";

export default function PrePrompt({
  message,
  className,
}: {
  message: string;
  className?: string;
}) {
  const submit = useSubmit();

  const handleClick = () => {
    submit({ message }, { method: "post", action: "/compliance-chat" });
  };

  return (
    <Button
      variant="secondary"
      className={cn("cursor-pointer bg-[#E6F8FA] text-[#02519E]", className)}
      onClick={handleClick}
    >
      Help me write my prompt
    </Button>
  );
}
