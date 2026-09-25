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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CancelSubscription() {
  const items = [
    { label: "I don't use it anymore", value: "i-dont-use-it-anymore" },
    { label: "It's too expensive", value: "it-s-too-expensive" },
  ];

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer text-[13px] text-red-500">
        Cancel subscription
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="grid size-12 place-items-center rounded-full bg-[#FCEDED] text-xl font-bold text-[#D13333]">
            !
          </DialogTitle>
          <DialogTitle className="text-lg font-bold text-[#101828]">
            Cancel your subscription?
          </DialogTitle>
          <DialogDescription className="text-sm text-[#899AB3]">
            You'll lose access to the AI compliance assistant, all state
            coverage, and team member management. This can't be undone once your
            billing period ends.
          </DialogDescription>
        </DialogHeader>
        <DialogDescription className="rounded-[8px] bg-[#FFF7E0] px-3.5 py-3 text-[13px] font-medium text-[#996B00]">
          Your access continues until Sep 22, 2026 — the end of your current
          billing period.
        </DialogDescription>

        <DialogDescription className="px-3.5 py-3 text-[13px] font-medium text-[#101828]">
          Help us improve — why are you leaving? (optional)
        </DialogDescription>

        <Select items={items}>
          <SelectTrigger className="w-full border border-[#E9EAEB] bg-white text-[13px] text-[#101828]">
            <SelectValue placeholder="Select a reason..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <DialogFooter className="flex! flex-col! gap-2.5 pt-5">
          <DialogClose className="w-full">
            <button className="w-full cursor-pointer rounded-[8px] bg-[linear-gradient(270deg,#00B5C6_0%,#02519E_100%)] px-5 py-2.5 text-sm font-medium text-white">
              Keep my subscription
            </button>
          </DialogClose>

          <DialogClose className="w-full">
            <button className="w-full cursor-pointer rounded-[8px] px-5 py-2.5 text-sm font-medium text-[#D13333]">
              Cancel subscription anyway
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
