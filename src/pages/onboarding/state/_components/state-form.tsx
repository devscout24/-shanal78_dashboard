import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Check, Clock, TriangleAlert, UsersRound, X } from "lucide-react";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import useOnboardingForm from "./use-state-form";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function StateForm({
  form,
  selectedStates,
  isPackageSelected, // ← add this prop
}: {
  form: ReturnType<typeof useOnboardingForm>["form"];
  selectedStates: string[];
  isPackageSelected: boolean; // ← add this
}) {
  const [tooltip, setTooltip] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);

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

              <div className="mt-6 flex gap-6">
                <div className="flex-1 rounded-2xl border-2 border-[#E5EBF2] bg-[#F8FAFC]">
                  <ComposableMap projection="geoAlbersUsa">
                    <Geographies geography={geoUrl}>
                      {({ geographies }) =>
                        geographies.map((geo) => {
                          const name = geo.properties.name;
                          const isSelected = field.value?.includes(name);

                          return (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              onClick={() => {
                                if (!isPackageSelected) {
                                  form.setError("states", {
                                    type: "manual",
                                    message:
                                      "Please select a package before choosing states.",
                                  });
                                  return;
                                }

                                const isCurrentlySelected =
                                  field.value?.includes(name);
                                const atLimit =
                                  !isCurrentlySelected &&
                                  field.value?.length >=
                                    (form.getValues("package")?.stateLimit ??
                                      0);

                                if (atLimit) {
                                  form.setError("states", {
                                    type: "manual",
                                    message:
                                      "You've reached your Individual limit — upgrade to Team for 10 more.",
                                  });
                                  return;
                                }

                                form.clearErrors("states");

                                const updatedStates = isCurrentlySelected
                                  ? field.value.filter((s) => s !== name)
                                  : [...(field.value || []), name];

                                field.onChange(updatedStates);
                              }}
                              onMouseEnter={(e) =>
                                setTooltip({ name, x: e.clientX, y: e.clientY })
                              }
                              onMouseLeave={() => setTooltip(null)}
                              style={{
                                default: {
                                  fill: isSelected ? "#00B5C6" : "#F9FAFB",
                                  stroke: "#949BA8",
                                  strokeWidth: 0.5,
                                  outline: "none",
                                  cursor: isPackageSelected
                                    ? "pointer"
                                    : "not-allowed", // ← visual cue
                                },
                                hover: {
                                  fill: isPackageSelected
                                    ? isSelected
                                      ? "#00B5C6"
                                      : "#E6F8F6"
                                    : "#F9FAFB", // ← no hover effect when disabled
                                  outline: "none",
                                },
                                pressed: { outline: "none" },
                              }}
                            />
                          );
                        })
                      }
                    </Geographies>
                  </ComposableMap>

                  {/* Tooltip */}
                  {tooltip && (
                    <div
                      className="pointer-events-none fixed z-50 rounded-lg bg-white p-3 shadow-lg"
                      style={{ top: tooltip.y - 80, left: tooltip.x - 60 }}
                    >
                      <p className="font-bold">{tooltip.name}</p>
                    </div>
                  )}
                </div>

                {/* Right panel */}
                <div className="w-100 rounded-2xl border-2 border-[#E5EBF2] bg-[#F8FAFC] p-6">
                  <p className="text-sm font-semibold">
                    Selected {selectedStates.length} /{" "}
                    {form.watch("package")?.stateLimit ?? "—"}
                  </p>
                  <ul className="mt-1 space-y-1">
                    {selectedStates.map((state) => (
                      <li key={state} className="text-xs font-medium">
                        {state}
                      </li>
                    ))}
                  </ul>

                  {/* errors show here */}
                  {fieldState.invalid && (
                    <div className="mt-3 flex items-center gap-1 rounded-2xl bg-[#FFF8ED] px-3 py-2.5 text-[#99590D]">
                      <TriangleAlert />
                      <FieldError
                        errors={[fieldState.error]}
                        className="text-[11.5px] font-medium text-[#99590D]"
                      />
                    </div>
                  )}

                  {!isPackageSelected && (
                    <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm font-medium text-amber-600">
                      Select a package above to enable state selection.
                    </p>
                  )}
                  {selectedStates.length > 0 && (
                    <Button
                      type="reset"
                      onClick={() => {
                        field.onChange([]);
                        form.clearErrors("states");
                      }}
                      className="text-secondary cursor-pointer p-0 text-[12.5px] font-semibold"
                      variant="link"
                    >
                      <X />
                      <span>Clear selections</span>
                    </Button>
                  )}
                </div>
              </div>

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
              <div>
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
                            HRBP add-on
                          </span>
                        </span>
                        <span className="text-xs font-medium text-[#475467]">
                          Dedicated HR business partner support for your
                          account.
                        </span>
                      </span>
                    </span>

                    <span className="flex flex-col items-end gap-1">
                      <span className="text-sm font-semibold">$500/mo</span>
                      <span className="flex items-center gap-1 rounded-full bg-[#E6F8F9] px-2 py-0.75">
                        <Clock className="text-secondary size-3" />
                        <span className="text-[10.5px] font-semibold text-[#00B5C6]">
                          Limited time only
                        </span>
                      </span>
                    </span>
                  </Label>
                </Field>
              </div>
            </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </div>
  );
}
