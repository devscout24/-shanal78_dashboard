import { Attachment, AttachmentMedia } from "@/components/ui/attachment";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bubble, BubbleContent } from "@/components/ui/bubble";
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/ui/message";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { IMessage } from "@/types/messages";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useLoaderData } from "react-router";
import ChatForm from "./_componens/chat-form";

export default function Chat() {
  const messages = useLoaderData<IMessage[]>();

  const bottomRef = useRef<HTMLDivElement>(null);
  const prevLengthRef = useRef(messages.length);

  // Scroll to bottom on first render (before paint)
  useLayoutEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, []);

  // Scroll to bottom only when new messages are added
  useEffect(() => {
    if (messages.length > prevLengthRef.current) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    prevLengthRef.current = messages.length;
  }, [messages.length]);

  return (
    <>
      <ScrollArea className="h-[calc(100vh-250px)] rounded-3xl bg-white">
        <div className="flex min-h-[calc(100vh-100px)] flex-col justify-end p-5">
          <div className="flex w-full flex-col gap-6 py-12">
            {messages?.map((message: IMessage) => (
              <Message
                key={message.id}
                align={message.sender === "user" ? "end" : "start"}
              >
                <MessageAvatar>
                  <Avatar>
                    <AvatarImage src={message.user.avatar} alt="@avatar" />
                    <AvatarFallback>R</AvatarFallback>
                  </Avatar>
                </MessageAvatar>
                <MessageContent>
                  {message.content.map((content, index) => (
                    <Bubble
                      key={index}
                      variant={message.sender === "user" ? "default" : "muted"}
                    >
                      <BubbleContent>{content}</BubbleContent>
                    </Bubble>
                  ))}

                  {message.attachments?.map((attachment) => (
                    <Attachment key={attachment.id} orientation="vertical">
                      <AttachmentMedia variant="image">
                        <img src={attachment.url} alt="Workspace" />
                      </AttachmentMedia>
                    </Attachment>
                  ))}
                </MessageContent>
              </Message>
            ))}
            <div ref={bottomRef} />
          </div>
        </div>
      </ScrollArea>
      <ChatForm />
    </>
  );
}
