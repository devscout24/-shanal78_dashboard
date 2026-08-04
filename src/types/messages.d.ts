export type IMessage = {
  id: string;
  content: string[];
  attachments: {
    id: string;
    url: string;
  }[];
  sender: "user" | "bot";
  user: {
    id: string;
    name: string;
    avatar: string;
  };
};
