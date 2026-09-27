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
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Controller } from "react-hook-form";
import useChangeRoleForm from "./use-change-role-form";

type ChangeRoleProps = {
  member: {
    name: string;
    email: string;
    status: string;
  };
};

export default function ChangeRole({ member }: ChangeRoleProps) {
  const { form, onSubmit } = useChangeRoleForm();

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer rounded-full px-3.5 py-3 text-[13px] font-medium text-[#899AB3]">
        Change role
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {/* <DialogTitle className="grid size-12 place-items-center rounded-full bg-[#E3F4F8] text-xl font-bold text-[#02519E]">
            <ShieldCheck />
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
            Change role for {member.name}
          </DialogTitle>
          <DialogDescription className="text-sm text-[#899AB3]">
            Choose what {member.name} can do in your A2HR account. The change
            takes effect right away.
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
              render={({ field, fieldState }) => {
                const active = roles.find((role) => role.value === field.value);
                return (
                  <Field data-invalid={fieldState.invalid}>
                    <RadioGroup
                      defaultValue={active?.id}
                      onValueChange={field.onChange}
                    >
                      {roles.map((role) => (
                        <FieldLabel
                          htmlFor={role.id}
                          key={role.id}
                          className="cursor-pointer"
                        >
                          <Field orientation="horizontal">
                            <RadioGroupItem
                              value={role.value}
                              id={role.id}
                              className="border-[#E9EAEB] data-[state=checked]:border-[#02519E]"
                            />
                            <FieldContent>
                              <FieldTitle>
                                <span>{role.Label}</span>
                                {role.active && (
                                  <span className="rounded-full bg-[#EEF2F7] px-2 py-1 text-[11px] font-medium text-[#475467]">
                                    Current
                                  </span>
                                )}
                              </FieldTitle>
                              <FieldDescription>
                                {role.description}
                              </FieldDescription>
                            </FieldContent>
                          </Field>
                        </FieldLabel>
                      ))}
                    </RadioGroup>
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </form>

        <DialogDescription className="rounded-[8px] bg-[#F5F7FA] px-3.5 py-3 text-[13px] font-medium text-[#101828]">
          {member.name}: Member → Admin
        </DialogDescription>

        <DialogFooter>
          <DialogClose>
            <button className="w-fit cursor-pointer rounded-[8px] border border-[#E9EAEB] bg-transparent px-5 py-2.5 text-sm font-medium text-[#101828]">
              Cancel
            </button>
          </DialogClose>

          <DialogClose>
            <button className="w-fit cursor-pointer rounded-[8px] bg-[linear-gradient(270deg,#00B5C6_0%,#02519E_100%)] px-5 py-2.5 text-sm font-medium text-white">
              Save role
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

const roles = [
  {
    Label: "Admin",
    value: "admin",
    id: "admin-role",
    description: "Can invite and remove members and manage the subscription.",
    active: false,
  },
  {
    Label: "Member",
    value: "member",
    id: "member-role",
    description: "Can use the AI compliance assistant. No admin access.",
    active: true,
  },
];
