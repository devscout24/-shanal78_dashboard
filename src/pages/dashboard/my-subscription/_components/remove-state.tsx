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

export default function RemoveState({ state }: { state: string }) {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer text-[13px] text-red-500">
        Remove
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="grid size-12 place-items-center rounded-full bg-[#FCEDED] text-xl font-bold text-[#D13333]">
            !
          </DialogTitle>
          <DialogTitle className="text-lg font-bold text-[#101828]">
            Remove Texas from your plan?
          </DialogTitle>
          <DialogDescription className="text-sm text-[#899AB3]">
            The AI assistant will stop answering Texas-specific questions and
            Texas compliance documents will no longer be available. This takes
            effect immediately — you can add Texas back anytime, subject to your
            plan's state cap.
          </DialogDescription>
        </DialogHeader>
        <DialogDescription className="rounded-[8px] bg-[#F5F7FA] px-3.5 py-3 text-[13px] font-medium text-[#101828]">
          After removal: 2 / 20 states used
        </DialogDescription>
        <DialogFooter>
          <DialogClose>
            <button className="cursor-pointer rounded-[8px] border border-[#E9EAEB] bg-white px-5 py-2.5 text-sm font-medium text-[#101828]">
              Cancel
            </button>
          </DialogClose>
          <DialogClose>
            <button className="cursor-pointer rounded-[8px] bg-[#D13333] px-5 py-2.5 text-sm font-medium text-white">
              Remove {state}
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
