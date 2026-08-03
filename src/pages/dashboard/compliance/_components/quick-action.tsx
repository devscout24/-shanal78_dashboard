import { Button } from "@/components/ui/button";
import ChatForm from "./chat-form";

export default function QuickAction() {
  return (
    <div className="p-5">
      <h3 className="font-sans text-base leading-6 font-semibold tracking-[-0.16px]">
        Quick actions
      </h3>

      <div className="mt-3 grid grid-cols-2 gap-3">
        <Button
          variant="outline"
          className="ring-ring font-sm h-11 cursor-pointer font-normal ring"
        >
          Payroll and wage regulations
        </Button>
        <Button
          variant="outline"
          className="ring-ring font-sm h-11 cursor-pointer font-normal ring"
        >
          Employee handbook policy guide
        </Button>
        <Button
          variant="outline"
          className="ring-ring font-sm h-11 cursor-pointer font-normal ring"
        >
          Employee rights and protections
        </Button>
        <Button
          variant="outline"
          className="ring-ring font-sm h-11 cursor-pointer font-normal ring"
        >
          Benefits compliance
        </Button>
      </div>

      <ChatForm />
    </div>
  );
}
