import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ChangeRoleProps = {
  member: {
    name: string;
    email: string;
    status: string;
  };
};

export default function RemoveMember({ member }: ChangeRoleProps) {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer rounded-full px-3.5 py-3 text-[13px] font-medium text-[#D13333]">
        Remove
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {/* <DialogTitle className="grid size-12 place-items-center rounded-full bg-[#FCEDED] text-xl font-bold text-[#D13333]">
            !
          </DialogTitle> */}

          <div className="flex items-center gap-2.5">
            <Avatar className="size-10 bg-[#E9EAEB]">
              <AvatarImage src="" />
              <AvatarFallback className="text-[13px] font-bold text-[#101828]">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div>
              <h4 className="text-[15px] font-bold text-[#101828]">
                {member.name}
              </h4>
              <p className="text-xs text-[#899AB3]">{member.email}</p>
            </div>
          </div>

          <DialogTitle className="text-lg font-bold text-[#101828]">
            Remove {member.name} from your team?
          </DialogTitle>
          <DialogDescription className="text-sm text-[#899AB3]">
            Chris will immediately lose access to the AI compliance assistant,
            documents, and this account. Their seat will become available for a
            new invite.
          </DialogDescription>
        </DialogHeader>
        <DialogDescription className="rounded-[8px] bg-[#F5F7FA] px-3.5 py-3 text-[13px] font-medium text-[#101828]">
          After removal: 3 / 4 seats used
        </DialogDescription>
        <DialogFooter>
          <DialogClose>
            <button className="cursor-pointer rounded-[8px] border border-[#E9EAEB] bg-white px-5 py-2.5 text-sm font-medium text-[#101828]">
              Cancel
            </button>
          </DialogClose>
          <DialogClose>
            <button className="cursor-pointer rounded-[8px] bg-[#D13333] px-5 py-2.5 text-sm font-medium text-white">
              Remove
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
