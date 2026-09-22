import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import creditCardType from "credit-card-type";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { Controller } from "react-hook-form";
import { Link } from "react-router";
import Steps from "../_components/steps";
import usePaymentForm from "./_components/use-payments-form";

// Helper to render card brand badge inside the card number input
function getCardBrandBadge(cardNumber: string) {
  const cleanNumber = cardNumber.replace(/\D/g, "");
  if (!cleanNumber) return null;

  const detectedCards = creditCardType(cleanNumber);
  if (detectedCards.length === 0) return null;

  const brand = detectedCards[0].type;
  const brandLabels: Record<
    string,
    { label: string; bg: string; text: string }
  > = {
    mastercard: { label: "MC", bg: "bg-red-100", text: "text-red-600" },
    visa: { label: "VISA", bg: "bg-blue-100", text: "text-blue-700" },
    "american-express": {
      label: "AMEX",
      bg: "bg-cyan-100",
      text: "text-cyan-700",
    },
    discover: { label: "DISC", bg: "bg-orange-100", text: "text-orange-600" },
  };

  const badge = brandLabels[brand] || {
    label: brand.slice(0, 2).toUpperCase(),
    bg: "bg-gray-100",
    text: "text-gray-700",
  };

  return (
    <span
      className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${badge.bg} ${badge.text}`}
    >
      {badge.label}
    </span>
  );
}

export default function Payments() {
  const { form, onSubmit } = usePaymentForm();

  return (
    <section>
      <form
        id="form-State"
        onSubmit={form.handleSubmit(onSubmit)}
        className="container mx-auto max-w-7xl max-lg:px-2"
      >
        <FieldGroup>
          <Steps activeId={3} />

          {/* Header Section */}
          <div className="mt-10 space-y-2 rounded-2xl border-2 border-[#E5EBF2] bg-white p-6">
            <p className="text-secondary text-xs font-semibold uppercase">
              STEP 3 OF 4
            </p>
            <h3 className="text-3xl font-semibold text-black">
              Payment Method
            </h3>
            <p className="text-sm font-medium text-[#475467]">
              Please add payment details for the card you want to use for your
              subscription.
            </p>
          </div>

          {/* Main Card Container */}
          <div className="mt-10 space-y-8 rounded-2xl border-2 border-[#E5EBF2] bg-white p-8">
            {/* Section 1: Card Details */}
            <div className="grid max-w-2xl grid-cols-1 items-start gap-8 lg:grid-cols-[180px_1fr]">
              <span className="text-sm font-semibold text-[#10172A]">
                Card details
              </span>

              <div className="space-y-4">
                {/* Row 1: Name on card & Expiry */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_140px]">
                  <Controller
                    name="cardHolderName"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel
                          htmlFor={field.name}
                          className="text-xs font-medium text-[#475467]"
                        >
                          Name on card
                        </FieldLabel>
                        <Input
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Chris Simmons"
                          autoComplete="off"
                          className="w-full rounded-lg border border-[#E5EBF2] bg-white px-4 py-3 text-sm font-medium text-[#10172A] placeholder:text-[#98A2B3]"
                        />
                      </Field>
                    )}
                  />

                  <Controller
                    name="expiryDate"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel
                          htmlFor={field.name}
                          className="text-xs font-medium text-[#475467]"
                        >
                          Expiry
                        </FieldLabel>
                        <Input
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="06 / 2024"
                          autoComplete="cc-exp"
                          maxLength={9}
                          value={field.value || ""}
                          onChange={(e) => {
                            let value = e.target.value.replace(/\D/g, "");
                            if (value.length > 6) value = value.slice(0, 6);
                            if (value.length >= 3) {
                              value = `${value.slice(0, 2)} / ${value.slice(2)}`;
                            }
                            field.onChange(value);
                          }}
                          className="w-full rounded-lg border border-[#E5EBF2] bg-white px-4 py-3 text-sm font-medium text-[#10172A] placeholder:text-[#98A2B3]"
                        />
                      </Field>
                    )}
                  />
                </div>

                {/* Row 2: Card number & CVV */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_140px]">
                  <Controller
                    name="cardNumber"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel
                          htmlFor={field.name}
                          className="text-xs font-medium text-[#475467]"
                        >
                          Card number
                        </FieldLabel>
                        <div className="relative flex items-center">
                          <div className="pointer-events-none absolute left-3 flex items-center">
                            {getCardBrandBadge(field.value)}
                          </div>
                          <Input
                            {...field}
                            id={field.name}
                            aria-invalid={fieldState.invalid}
                            placeholder="1234 1234 1234 1234"
                            autoComplete="cc-number"
                            maxLength={19}
                            value={field.value || ""}
                            onChange={(e) => {
                              let value = e.target.value.replace(/\D/g, "");
                              if (value.length > 16) value = value.slice(0, 16);
                              value = value.replace(/(\d{4})(?=\d)/g, "$1 ");
                              field.onChange(value);
                            }}
                            className={`w-full rounded-lg border border-[#E5EBF2] bg-white py-3 text-sm font-medium text-[#10172A] placeholder:text-[#98A2B3] ${
                              getCardBrandBadge(field.value) ? "pl-14" : "pl-4"
                            } pr-4`}
                          />
                        </div>
                      </Field>
                    )}
                  />

                  <Controller
                    name="cvv"
                    control={form.control}
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel
                          htmlFor={field.name}
                          className="text-xs font-medium text-[#475467]"
                        >
                          CVV
                        </FieldLabel>
                        <Input
                          {...field}
                          id={field.name}
                          type="password"
                          aria-invalid={fieldState.invalid}
                          placeholder="..."
                          autoComplete="cc-csc"
                          maxLength={4}
                          className="w-full rounded-lg border border-[#E5EBF2] bg-white px-4 py-3 text-sm font-medium text-[#10172A] placeholder:text-[#98A2B3]"
                        />
                      </Field>
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#E5EBF2]" />

            {/* Section 2: Email Address */}
            <div className="grid max-w-2xl grid-cols-1 items-start gap-8 lg:grid-cols-[180px_1fr]">
              <span className="text-sm font-semibold text-[#10172A]">
                Email address
              </span>

              <div className="space-y-3">
                <div className="relative flex max-w-lg items-center">
                  <Mail className="absolute left-3 h-4 w-4 text-[#98A2B3]" />
                  <Input
                    disabled
                    value="chris.simmons@a2hr.com"
                    className="w-full rounded-lg border border-[#E5EBF2] bg-white py-3 pr-4 pl-10 text-sm font-medium text-[#10172A]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 mb-16 flex w-fit gap-5 rounded-2xl border px-6 py-3">
            <Link
              type="button"
              className="flex items-center gap-2 rounded-lg border border-[#10172A] px-5 py-2.5 text-sm font-semibold text-[#10172A]"
              to="/onboarding/state"
            >
              <ChevronLeft className="size-5" />
              <span>Previous</span>
            </Link>

            <Button
              type="submit"
              className="h-11 cursor-pointer rounded-lg bg-[linear-gradient(270deg,#00B5C6_0%,#02519E_100%)] px-5 py-2.5 text-sm font-semibold text-white"
            >
              <span>Next</span>
              <ChevronRight className="size-5" />
            </Button>
          </div>
        </FieldGroup>
      </form>
    </section>
  );
}
