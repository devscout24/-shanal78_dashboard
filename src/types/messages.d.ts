export type IMessage = {
  id: string;
  content: string;
  sender: "user" | "bot";
  user: {
    id: string;
    name: string;
    avatar: string;
  };
};
