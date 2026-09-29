import { Button } from "@/components/ui/button";
import {
  Dialog,
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
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Mail, Send } from "lucide-react";
import { Controller } from "react-hook-form";
import useContactUsForm from "./use-contact-us";

export default function ContactUs() {
  const { form, onSubmit } = useContactUsForm();
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button
            type="button"
            variant="outline"
            className="mt-6 h-10 w-full cursor-pointer rounded-xl border border-black bg-transparent text-sm font-semibold text-black ring"
          >
            Contact Us
          </Button>
        }
      />
      <DialogContent className="bg-[#F7FBFE] p-10">
        <form
          id="form-contact-us"
          onSubmit={(e) => {
            e.stopPropagation();
            form.handleSubmit(onSubmit)(e);
          }}
        >
          <DialogHeader>
            <DialogTitle className="text-[26px] font-semibold text-[#10172A]">
              Let's get you set up
            </DialogTitle>
            <DialogDescription className="text-[13px] font-medium text-[#475467]">
              Enterprise accounts are set up with our sales team. Fill this out
              and we'll follow up within 1 business day.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="text-[12.5px] font-semibold text-[#10172A]"
                  >
                    Name
                  </FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="Prefilled from Step 1"
                    autoComplete="off"
                    className="h-11 bg-white ring ring-[#D9DEE5] placeholder:text-[#99A1AD]"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="text-[12.5px] font-semibold text-[#10172A]"
                  >
                    Email
                  </FieldLabel>

                  <InputGroup className="h-11 bg-white ring ring-[#D9DEE5] placeholder:text-[#99A1AD]">
                    <InputGroupInput
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Prefilled from Step 1"
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

            <Controller
              name="company"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="text-[12.5px] font-semibold text-[#10172A]"
                  >
                    Company name
                  </FieldLabel>

                  <InputGroup className="h-11 bg-white ring ring-[#D9DEE5] placeholder:text-[#99A1AD]">
                    <InputGroupInput
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Prefilled from Step 1"
                      autoComplete="off"
                    />
                  </InputGroup>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="estimateUsers"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="text-[12.5px] font-semibold text-[#10172A]"
                  >
                    Estimated user count
                  </FieldLabel>

                  <InputGroup className="h-11 bg-white ring ring-[#D9DEE5] placeholder:text-[#99A1AD]">
                    <InputGroupInput
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="5–10 / 11–25 / 26–100 / 100+"
                      autoComplete="off"
                    />
                  </InputGroup>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel
                    htmlFor={field.name}
                    className="text-[12.5px] font-semibold text-[#10172A]"
                  >
                    Message / needs
                  </FieldLabel>

                  <InputGroup className="h-11 bg-white ring ring-[#D9DEE5] placeholder:text-[#99A1AD]">
                    <InputGroupInput
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Tell us about your team..."
                      autoComplete="off"
                    />
                  </InputGroup>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
          <DialogFooter className="flex-col! border-0 bg-transparent">
            <Button
              type="submit"
              className="h-11 cursor-pointer rounded-[10px] bg-[linear-gradient(270deg,#00B5C6_0%,#02519E_100%)] text-sm font-semibold"
            >
              <span>Submit</span>
              <Send />
            </Button>
            <p className="text-xs font-medium text-[#475467]">
              "Thanks — we'll be in touch within 1 business day."
            </p>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
