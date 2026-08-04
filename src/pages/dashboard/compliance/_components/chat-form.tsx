import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useRef } from "react";
import { useFetcher } from "react-router";
import PrePrompt from "./pre-prompt";

export default function ChatForm() {
  const fetcher = useFetcher();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data) {
      formRef.current?.reset();
    }
  }, [fetcher.state, fetcher.data]);

  return (
    <div className="ring-ring mt-6 w-full rounded-[16px] p-5 ring-2">
      <fetcher.Form ref={formRef} method="post" action="/compliance-chat">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <fieldset>
              <Input
                placeholder="Start typing..."
                className="placeholder:text-muted-foreground h-11 rounded-[10px] border-2 px-3.5 py-2.5 font-sans text-sm placeholder:font-sans placeholder:text-sm"
                type="message"
                name="message"
              />
            </fieldset>
          </div>

          <Button
            type="submit"
            className="from-primary to-secondary shadow-blue size-8 cursor-pointer rounded-full bg-linear-to-r"
            disabled={fetcher.state === "submitting"}
          >
            <Icon src="/icons/ai-chat-send.svg" className="h-3 w-4" />
          </Button>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PrePrompt message="Help me write my prompt" />
            <PrePrompt
              message="Help me write my prompt"
              className="text-foreground bg-[#F2F4F7]"
            />
          </div>

          <fieldset>
            <Label htmlFor="file">
              <Icon
                src="/icons/file-upload.svg"
                className="h-4 w-4 cursor-pointer"
              />
            </Label>
            <Input id="file" type="file" name="file" hidden />
          </fieldset>
        </div>
      </fetcher.Form>
    </div>
  );
}
