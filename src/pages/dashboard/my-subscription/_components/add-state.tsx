import { useState } from "react";
import { Controller } from "react-hook-form";
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
import State from "./state";
import useSelectStateForm from "./use-select-state-form";

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "West Virginia", "Wisconsin", "Wyoming",
];

export default function AddState() {
  const { form, onSubmit } = useSelectStateForm();
  const [search, setSearch] = useState("");

  const filtered = (
    search.trim()
      ? US_STATES.filter((s) =>
          s.toLowerCase().includes(search.toLowerCase()),
        )
      : US_STATES
  ).slice(0, 5);

  return (
    <Dialog>
      <DialogTrigger className="from-primary to-secondary h-9 w-fit cursor-pointer rounded-[8px] bg-linear-to-r px-4.5 font-mono text-sm leading-5 font-medium text-white">
        <span>+</span> <span>Add state</span>
      </DialogTrigger>
      <DialogContent className="max-w-lg p-6">
        <form id="form-add-state" onSubmit={form.handleSubmit(onSubmit)}>
          <DialogHeader className="mb-4">
            <DialogTitle className="text-lg font-bold text-[#101828]">
              Add states to your plan
            </DialogTitle>
            <DialogDescription className="text-sm text-[#899AB3]">
              Federal always included · 3 of 20 states used on your Team plan —
              you can add up to 17 more.
            </DialogDescription>
          </DialogHeader>

          <Controller
            name="states"
            control={form.control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-4">
                {/* Map */}
                <State selectedStates={field.value ?? []} />

                {/* Search */}
                <input
                  type="text"
                  placeholder="Search states..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-xl border border-[#E5EBF2] bg-white px-4 py-2.5 text-sm text-[#101828] placeholder:text-[#B0BAC9] outline-none focus:border-[#00B5C6]"
                />

                {/* State list */}
                <div className="rounded-xl border border-[#E5EBF2] bg-white">
                  {filtered.length === 0 && (
                    <p className="px-4 py-3 text-sm text-[#B0BAC9]">
                      No states found.
                    </p>
                  )}

                  {filtered.map((state, i) => {
                    const checked = field.value?.includes(state) ?? false;

                    const toggle = () => {
                      const next = checked
                        ? field.value.filter((s) => s !== state)
                        : [...(field.value ?? []), state];
                      field.onChange(next);
                    };

                    return (
                      <label
                        key={state}
                        onClick={toggle}
                        className={`flex cursor-pointer items-center gap-3 px-4 py-3 select-none ${
                          i !== filtered.length - 1
                            ? "border-b border-[#E5EBF2]"
                            : ""
                        }`}
                      >
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                            checked
                              ? "border-[#00B5C6] bg-[#00B5C6]"
                              : "border-[#D0D5DD] bg-white"
                          }`}
                        >
                          {checked && (
                            <svg
                              className="h-2.5 w-2.5 text-white"
                              viewBox="0 0 10 8"
                              fill="none"
                            >
                              <path
                                d="M1 4l3 3 5-6"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          )}
                        </span>
                        <span className="text-sm font-medium text-[#101828]">
                          {state}
                        </span>
                      </label>
                    );
                  })}
                </div>

                {fieldState.error && (
                  <p className="text-xs text-red-500">
                    {fieldState.error.message}
                  </p>
                )}

                <DialogFooter className="flex-row gap-3 pt-1">
                  <DialogClose className="flex-1 cursor-pointer rounded-[8px] border border-[#E5EBF2] px-5 py-2.5 text-sm font-medium text-[#344054]">
                    Cancel
                  </DialogClose>
                  <button
                    type="submit"
                    disabled={!field.value?.length}
                    className="flex-1 cursor-pointer rounded-[8px] bg-[linear-gradient(270deg,#00B5C6_0%,#02519E_100%)] px-5 py-2.5 text-sm font-medium text-white disabled:opacity-50"
                  >
                    {field.value?.length
                      ? `Add ${field.value.length} state${field.value.length > 1 ? "s" : ""}`
                      : "Add states"}
                  </button>
                </DialogFooter>
              </div>
            )}
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}
