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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Mail, UserRoundPlus } from "lucide-react";
import { Controller } from "react-hook-form";
import useInviteTeamMemberForm from "./use-invite-team-member";

export default function InviteMemberForm() {
  const { form, onSubmit } = useInviteTeamMemberForm();

  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer rounded-[8px] bg-[#99999E] px-4.5 py-2.5 text-sm font-medium text-white">
        + Invite member
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
              name="role"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <InputGroup
                    className="h-11 border-[#E9EAEB] px-3.5 focus-within:border-[#02519E]"
                    {...field}
                  >
                    <InputGroupInput placeholder="name@company.com" />
                    <InputGroupAddon>
                      <Mail />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              )}
            />

            <Controller
              name="role"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <RadioGroup
                    defaultValue={roles[0].id}
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
                            <FieldTitle>{role.Label}</FieldTitle>
                            <FieldDescription>
                              {role.description}
                            </FieldDescription>
                          </FieldContent>
                        </Field>
                      </FieldLabel>
                    ))}
                  </RadioGroup>
                </Field>
              )}
            />
          </FieldGroup>
        </form>

        <DialogDescription className="rounded-[8px] bg-[#F5F7FA] px-3.5 py-3 text-[13px] font-medium text-[#101828]">
          After invite: 4 / 4 seats used on Team plan
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
  },
  {
    Label: "Member",
    value: "member",
    id: "member-role",
    description: "Can use the AI compliance assistant. No admin access.",
  },
];
