import { Button } from "@/components/ui/button";
import { FieldError } from "@/components/ui/field";
import { useGetStatesQuery } from "@/store/api/state.api";
import { TriangleAlert, X } from "lucide-react";
import { useState } from "react";
import type {
  ControllerFieldState,
  ControllerRenderProps,
} from "react-hook-form";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import useOnboardingForm from "./use-state-form";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

type StateMapProps = {
  field: ControllerRenderProps<
    {
      package: {
        id: string;
        name: string;
        price: number;
        stateLimit: number;
      } | null;
      states: string[];
      addOn?: boolean | undefined;
    },
    "states"
  >;
  form: ReturnType<typeof useOnboardingForm>["form"];
  selectedStates: string[];
  isPackageSelected: boolean; // ← add this
  fieldState: ControllerFieldState;
};

export default function StateMap({
  field,
  form,
  selectedStates,
  isPackageSelected, // ← add this prop
  fieldState,
}: StateMapProps) {
  const [tooltip, setTooltip] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);

  const { isError, isLoading, data } = useGetStatesQuery();

  if (isLoading) {
    return (
      <div className="mt-10 flex items-center justify-center rounded-2xl border-2 border-[#E5EBF2] bg-white p-6">
        <p className="text-sm font-medium text-[#475467]">Loading states...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-10 flex items-center justify-center rounded-2xl border-2 border-[#E5EBF2] bg-white p-6">
        <p className="text-sm font-medium text-[#475467]">
          Error loading states. Please try again later.
        </p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="mt-10 flex items-center justify-center rounded-2xl border-2 border-[#E5EBF2] bg-white p-6">
        <p className="text-sm font-medium text-[#475467]">
          No states available at the moment. Please check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 flex gap-6">
      <div className="flex-1 rounded-2xl border-2 border-[#E5EBF2] bg-[#F8FAFC]">
        <ComposableMap projection="geoAlbersUsa">
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const name = geo.properties.name;
                const isAvailable = data.some((s) => s.name === name);
                const isSelected = field.value?.includes(name);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => {
                      if (!isAvailable) return;

                      if (!isPackageSelected) {
                        form.setError("states", {
                          type: "manual",
                          message:
                            "Please select a package before choosing states.",
                        });
                        return;
                      }

                      const isCurrentlySelected = field.value?.includes(name);
                      const atLimit =
                        !isCurrentlySelected &&
                        field.value?.length >=
                          (form.getValues("package")?.stateLimit ?? 0);

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
                        fill: !isAvailable
                          ? "#FECACA"
                          : isSelected
                            ? "#00B5C6"
                            : "#F9FAFB",
                        stroke: "#949BA8",
                        strokeWidth: 0.5,
                        outline: "none",
                        cursor: !isAvailable
                          ? "not-allowed"
                          : isPackageSelected
                            ? "pointer"
                            : "not-allowed",
                      },
                      hover: {
                        fill: !isAvailable
                          ? "#FECACA"
                          : isPackageSelected
                            ? isSelected
                              ? "#00B5C6"
                              : "#E6F8F6"
                            : "#F9FAFB",
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
  );
}
