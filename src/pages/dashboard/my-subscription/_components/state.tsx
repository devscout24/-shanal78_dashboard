import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

export default function State({
  selectedStates,
}: {
  selectedStates: string[];
}) {
  const [tooltip, setTooltip] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);

  return (
    <div className="map-container relative flex-1 rounded-2xl border-2 border-[#E5EBF2] bg-[#F8FAFC]">
      <ComposableMap projection="geoAlbersUsa">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const name = geo.properties.name;
              const isSelected = selectedStates.includes(name);

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(e) => {
                    const rect = (e.currentTarget as SVGElement)
                      .closest(".map-container")
                      ?.getBoundingClientRect();
                    setTooltip({
                      name,
                      x: e.clientX - (rect?.left ?? 0),
                      y: e.clientY - (rect?.top ?? 0),
                    });
                  }}
                  onMouseLeave={() => setTooltip(null)}
                  style={{
                    default: {
                      fill: isSelected ? "#00B5C6" : "#F9FAFB",
                      stroke: "#949BA8",
                      strokeWidth: 0.5,
                      outline: "none",
                      cursor: "default",
                    },
                    hover: {
                      fill: isSelected ? "#00A0AF" : "#E6F8FA",
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

      {tooltip && (
        <div
          className="pointer-events-none absolute z-50 rounded-lg bg-white p-3 shadow-lg"
          style={{ top: tooltip.y - 80, left: tooltip.x - 60 }}
        >
          <p className="font-bold">{tooltip.name}</p>
        </div>
      )}
    </div>
  );
}
