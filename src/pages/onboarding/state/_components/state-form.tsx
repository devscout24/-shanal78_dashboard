import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { useGetPlansQuery } from "@/store/api/plan.api";
import { Check, Clock, UsersRound } from "lucide-react";
import { Controller } from "react-hook-form";
import StateMap from "./state-map";
import useOnboardingForm from "./use-state-form";

export default function StateForm({
  form,
  selectedStates,
  isPackageSelected, // ← add this prop
}: {
  form: ReturnType<typeof useOnboardingForm>["form"];
  selectedStates: string[];
  isPackageSelected: boolean; // ← add this
}) {
  const { isError, isLoading, data } = useGetPlansQuery();

  if (isLoading) {
    return (
      <div className="mt-10 flex items-center justify-center rounded-2xl border-2 border-[#E5EBF2] bg-white p-6">
        <p className="text-sm font-medium text-[#475467]">Loading plans...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-10 flex items-center justify-center rounded-2xl border-2 border-[#E5EBF2] bg-white p-6">
        <p className="text-sm font-medium text-[#475467]">
          Error loading plans. Please try again later.
        </p>
      </div>
    );
  }

  const { addons } = data || {};

  if (!addons || addons.length === 0) {
    return (
      <div className="mt-10 flex items-center justify-center rounded-2xl border-2 border-[#E5EBF2] bg-white p-6">
        <p className="text-sm font-medium text-[#475467]">
          No add-ons available at the moment. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <div>
      <Controller
        name="states"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <div className="mt-10 gap-5 rounded-2xl border-2 border-[#E5EBF2] bg-white p-6">
              <h1 className="text-lg font-semibold text-[#10172A]">
                Select your states
              </h1>
              <p className="mt-4 flex w-fit items-center gap-1.5 rounded-full bg-[#E6F8F9] px-3 py-1.5 text-xs font-semibold text-[#00B5C6]">
                <Check strokeWidth={3} className="size-3.25" />
                <span>Federal coverage included with every plan</span>
              </p>

              <StateMap
                field={field}
                form={form}
                selectedStates={selectedStates}
                isPackageSelected={isPackageSelected}
                fieldState={fieldState}
              />

              <p className="mt-3 text-[11.5px] font-medium text-[#475467]">
                Hidden entirely for Enterprise — all states are included
                automatically.
              </p>
            </div>
          </Field>
        )}
      />

      <Controller
        name="addOn"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field className="mt-10 rounded-2xl border-2 border-[#E5EBF2] bg-white p-6">
            <h2 className="text-lg font-semibold text-[#10172A]">Add-ons</h2>

            <div className="w-full rounded-xl border-2 border-[#E5EBF2] bg-[#F8FAFC] p-4">
              {addons.map((addon) => (
                <div key={addon.id} className="mb-4 last:mb-0">
                  <Field orientation="horizontal">
                    <Label
                      htmlFor="terms-checkbox"
                      className="flex w-full cursor-pointer justify-between"
                    >
                      <span className="flex items-center gap-4">
                        <Checkbox
                          onCheckedChange={field.onChange}
                          checked={field.value}
                          name="addOn"
                          id="terms-checkbox"
                          className="size-5 border-[#00B5C6] checked:bg-[#00B5C6] focus:ring-[#00B5C6] data-[state=checked]:border-[#00B5C6]"
                        />
                        <span>
                          <span className="flex w-full items-center gap-1">
                            <UsersRound className="text-secondary size-3.75" />
                            <span className="text-sm font-semibold">
                              {addon.name}
                            </span>
                          </span>
                          <span className="text-xs font-medium text-[#475467]">
                            {addon.description}
                          </span>
                        </span>
                      </span>

                      <span className="flex flex-col items-end gap-1">
                        <span className="text-sm font-semibold">
                          ${addon.monthly_price}/mo
                        </span>
                        <span className="flex items-center gap-1 rounded-full bg-[#E6F8F9] px-2 py-0.75">
                          <Clock className="text-secondary size-3" />
                          <span className="text-[10.5px] font-semibold text-[#00B5C6]">
                            {addon.badge}
                          </span>
                        </span>
                      </span>
                    </Label>
                  </Field>
                </div>
              ))}
            </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </div>
  );
}
