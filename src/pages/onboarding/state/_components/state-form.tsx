import Icon from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldError } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import useOnboardingForm from "./use-state-form";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const STATE_PRICES: Record<string, number> = {
  Texas: 100,
  California: 100,
  "New York": 100,
  Florida: 100,
  Georgia: 125,
};

export default function SelectState() {
  const { form, onSubmit, total } = useOnboardingForm();

  const [tooltip, setTooltip] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);

  return (
    <form id="form-onboarding" onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        name="states"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <div className="mx-auto mt-20.5 max-w-6xl">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl leading-9.5 font-semibold">
                    Select your States
                  </h1>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>

                <div>
                  <h1 className="text-3xl leading-9.5 font-semibold">
                    ${total.toFixed(2)}/mo
                  </h1>
                  <p className="text-muted-foreground text-end">Total Cost</p>
                </div>
              </div>

              <div className="mt-8.5 rounded-2xl border p-7.5">
                <Button
                  size={"lg"}
                  variant={"outline"}
                  className="border-primary/50 text-primary cursor-pointer"
                  onClick={() => form.setValue("states", [])}
                >
                  Clear selections
                </Button>
                <div className="mt-5 flex gap-21">
                  <div className="-mt-14 flex-1">
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
                                  const slectedStates = field.value?.includes(
                                    name,
                                  )
                                    ? field.value.filter((s) => s !== name)
                                    : [...(field.value || []), name];
                                  field.onChange(slectedStates);
                                }}
                                onMouseEnter={(e) =>
                                  setTooltip({
                                    name,
                                    x: e.clientX,
                                    y: e.clientY,
                                  })
                                }
                                onMouseLeave={() => setTooltip(null)}
                                style={{
                                  default: {
                                    fill: isSelected ? "#7C3AED" : "#F9FAFB",
                                    stroke: "#949BA8",
                                    strokeWidth: 0.5,
                                    outline: "none",
                                    cursor: "pointer",
                                  },
                                  hover: {
                                    fill: isSelected ? "#6D28D9" : "#C4B5FD",
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
                        <p className="text-sm text-gray-500">
                          Available data for{" "}
                          {tooltip.name.slice(0, 2).toUpperCase()}
                        </p>
                        <p className="text-sm font-semibold">
                          ${STATE_PRICES[tooltip.name] ?? 0}.00
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right panel */}
                  <div className="w-70">
                    <p className="text-2xl font-bold">${total}.00/</p>
                    {form.getValues("states")?.map((state) => (
                      <div key={state} className="mt-3">
                        <p className="text-sm">{state}</p>
                        <div className="mt-1 flex items-center gap-2">
                          <div className="h-1.5 flex-1 rounded bg-gray-200" />
                          <span className="text-sm">
                            ${STATE_PRICES[state] ?? 0}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* {fieldState.invalid && <FieldError errors={[fieldState.error]} />} */}
          </Field>
        )}
      />

      <Controller
        name="addOn"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field className="mx-auto max-w-6xl">
            <div className="mt-9.5">
              <h1 className="text-3xl leading-9.5 font-semibold">Add-Ons</h1>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet
              </p>
            </div>

            <div className="w-full rounded-2xl border-2 border-[#1570EF]">
              <div>
                <Field
                  orientation="horizontal"
                  className="flex w-full items-center justify-between gap-3 border-b-2 border-[#1570EF] p-3"
                >
                  <Label
                    htmlFor="terms-checkbox"
                    className="w-full cursor-pointer"
                  >
                    <span className="grid size-8 place-items-center rounded-full bg-[#F4EBFF]">
                      <Icon
                        src="/icons/alert-circle.svg"
                        className="size-4 text-[#7F56D9]"
                      />
                    </span>
                    <span className="text-base leading-6 font-semibold">
                      HRBP
                    </span>
                  </Label>
                  <Checkbox
                    onCheckedChange={field.onChange}
                    checked={field.value}
                    name="addOn"
                    id="terms-checkbox"
                    className="border-[#7F56D9] checked:bg-[#7F56D9] focus:ring-[#7F56D9] data-[state=checked]:border-[#7F56D9]"
                  />
                </Field>

                <div className="p-3">
                  <div>
                    <h1 className="text-7.5 leading-9.5 font-semibold">
                      $500{" "}
                      <span className="text-muted-foreground text-sm leading-5 font-normal">
                        per month
                      </span>
                    </h1>
                  </div>
                  <p className="text-muted-foreground text-sm leading-5 font-normal">
                    List what this includes here...
                  </p>
                </div>
              </div>
            </div>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
    </form>
  );
}
