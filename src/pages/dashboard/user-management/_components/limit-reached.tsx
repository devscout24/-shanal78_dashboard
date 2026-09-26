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

export default function LimitReached() {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer rounded-[8px] bg-[#99999E] px-4.5 py-2.5 text-sm font-medium text-white">
        + Invite member (seat limit reached)
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="grid size-12 place-items-center rounded-full bg-[#FFF0C7] text-xl font-bold text-[#996B00]">
            !
          </DialogTitle>
          <DialogTitle className="text-lg font-bold text-[#101828]">
            You've reached your seat limit
          </DialogTitle>
          <DialogDescription className="text-sm text-[#899AB3]">
            Your Team plan includes up to 4 users, and all 4 seats are in use.
            To invite a new member, remove an existing one or upgrade to a plan
            with more seats.
          </DialogDescription>
        </DialogHeader>
        <DialogDescription className="rounded-[8px] bg-[#FFF7E0] px-3.5 py-3 text-[13px] font-medium text-[#996B00]">
          After removal: 2 / 20 states used
        </DialogDescription>
        <DialogFooter className="flex! flex-col! gap-2.5 pt-5">
          <DialogClose className="w-full">
            <button className="w-full cursor-pointer rounded-[8px] bg-[linear-gradient(270deg,#00B5C6_0%,#02519E_100%)] px-5 py-2.5 text-sm font-medium text-white">
              Upgrade to Enterprise (unlimited users)
            </button>
          </DialogClose>

          <DialogClose className="w-full">
            <button className="w-full cursor-pointer rounded-[8px] border border-[#E9EAEB] bg-transparent px-5 py-2.5 text-sm font-medium text-[#101828]">
              Remove an existing member instead
            </button>
          </DialogClose>

          <DialogClose className="w-full cursor-pointer text-[#899AB3]">
            Maybe later
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
