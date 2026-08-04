import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFetcher, useParams } from "react-router";
import PrePrompt from "./pre-prompt";

export default function ChatForm() {
  const { id } = useParams();
  const fetcher = useFetcher();

  return (
    <div className="ring-ring mt-2 w-full rounded-[16px] bg-white p-5 ring-1">
      <fetcher.Form method="post" action={`/compliance-chat/${id}`}>
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <fieldset>
              <Input
                placeholder="Reply to A2HR..."
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
            <PrePrompt id={id!} message="Help me write my prompt" />
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
