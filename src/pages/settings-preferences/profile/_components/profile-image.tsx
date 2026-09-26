import Icon from "@/components/shared/Icon";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { auth } from "@/config/firebase";

export default function ProfileImage() {
  const user = auth.currentUser;

  if (!user) {
    return null;
  }

  return (
    <div className="flex items-center gap-5 py-4">
      <div className="ring-ring w-fit rounded-full bg-[#F9F9F9] p-2 ring">
        <Avatar className="ring-ring size-40 ring">
          <AvatarImage src={user.photoURL || "https://github.com/shadcn.png"} />
          <AvatarFallback>{user.displayName?.charAt(0) || "U"}</AvatarFallback>
          <AvatarBadge className="right-4 bottom-4">
            <Icon src="/icons/verified-tick.svg" className="size-8" />
          </AvatarBadge>
        </Avatar>
      </div>

      <div className="mt-16 flex flex-1 items-center justify-between gap-4">
        <div>
          <h3 className="font-sans text-2xl leading-8 font-semibold">
            {user.displayName || ""}
          </h3>
          <h3 className="text-muted-foreground font-sans text-base leading-6 font-normal">
            {user.email || "example@example.com"}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="h-10 cursor-pointer border-2 border-[#D5D7DA]! bg-white px-4 py-2 font-sans text-sm leading-5 font-semibold"
          >
            <Icon src="/icons/user-plus.svg" className="text-#D5D7DA] size-5" />
            <span>Share</span>
          </Button>
          <Button className="from-primary to-secondary h-10 cursor-pointer bg-linear-to-r px-4 py-2 font-sans text-sm leading-5 font-semibold">
            View profile
          </Button>
        </div>
      </div>
    </div>
  );
}
