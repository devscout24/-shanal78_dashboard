import { Button } from "@/components/ui/button";
import { useSubmit } from "react-router";

export default function PrePrompt({
  id,
  message,
}: {
  id: string;
  message: string;
}) {
  const submit = useSubmit();

  const handleClick = () => {
    submit({ message }, { method: "post", action: `/compliance-chat/${id}` });
  };

  return (
    <Button
      variant="secondary"
      className="cursor-pointer bg-[#E6F8FA] text-[#02519E]"
      onClick={handleClick}
    >
      Help me write my prompt
    </Button>
  );
}
