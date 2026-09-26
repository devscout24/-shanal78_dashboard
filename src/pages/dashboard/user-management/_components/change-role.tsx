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
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Mail, UserRoundPlus } from "lucide-react";
import { Controller } from "react-hook-form";
import useChangeRoleForm from "./use-change-role-form";

export default function ChangeRole() {
  const { form, onSubmit } = useChangeRoleForm();

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer rounded-full px-3.5 py-3 text-[13px] font-medium text-[#899AB3]">
        Change role
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="grid size-12 place-items-center rounded-full bg-[#E3F4F8] text-xl font-bold text-[#02519E]">
            <UserRoundPlus />
          </DialogTitle>
          <DialogTitle className="text-lg font-bold text-[#101828]">
            Invite a team member
          </DialogTitle>
          <DialogDescription className="text-sm text-[#899AB3]">
            They’ll get an email invitation to join your A2HR account. Choose a
            role to control what they can do.
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-5 flex flex-col gap-4"
        >
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <InputGroup
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                  >
                    <InputGroupInput
                      placeholder="name@company.com"
                      autoComplete="off"
                    />
                    <InputGroupAddon>
                      <Mail />
                    </InputGroupAddon>
                  </InputGroup>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>

        <DialogDescription className="rounded-[8px] bg-[#FFF7E0] px-3.5 py-3 text-[13px] font-medium text-[#996B00]">
          After removal: 2 / 20 states used
        </DialogDescription>

        <DialogFooter className="flex! flex-col! gap-2.5 pt-5">
          <DialogClose className="w-full">
            <button className="w-full cursor-pointer rounded-[8px] bg-[linear-gradient(270deg,#00B5C6_0%,#02519E_100%)] px-5 py-2.5 text-sm font-medium text-white">
              Upgrade to Enterprise (unlimited users)
            </button>
          </DialogClose>

          <DialogClose>
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
