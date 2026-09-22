import { useWatch } from "react-hook-form";
import useOnboardingForm from "./use-state-form";

export default function Total({
  form,
}: {
  form: ReturnType<typeof useOnboardingForm>["form"];
}) {
  const selectedPackage = useWatch({
    control: form.control,
    name: "package",
    defaultValue: null,
  });

  const addOn = useWatch({
    control: form.control,
    name: "addOn",
    defaultValue: false,
  });

  const addOnTotal = addOn ? 500 : 0;
  const packagePrice = selectedPackage?.price ?? 0;
  const total = packagePrice + addOnTotal;

  return (
    <div className="mt-10 rounded-2xl border-2 border-[#E5EBF2] bg-white p-6">
      <h2 className="text-lg font-semibold text-[#10172A]">Order summary</h2>
      <ul className="mt-3 space-y-3 border-b border-[#E5EBF2] pb-3">
        <li className="flex justify-between text-[13.5px] font-medium text-[#10172A]">
          <span>{selectedPackage?.name || "Team plan"}</span>
          <span className="font-semibold">
            ${packagePrice.toFixed(2)} / month
          </span>
        </li>
        <li className="flex justify-between text-[13.5px] font-medium text-[#10172A]">
          <span>HRBP add-on</span>
          <span className="font-semibold">
            ${addOnTotal.toFixed(2)} / month
          </span>
        </li>
      </ul>

      <h2 className="mt-3 flex justify-between text-lg font-semibold text-[#10172A]">
        <span>Total</span>
        <span className="text-secondary">${total.toFixed(2)} / month</span>
      </h2>
      <ul className="mt-3 space-y-2">
        <li className="flex justify-between text-[11.5px] font-medium text-[#10172A]">
          Subtotal shown pre-tax — tax calculated at checkout.
        </li>
        <li className="flex justify-between text-[11.5px] font-medium text-[#10172A]">
          Enterprise: cart is replaced with "You'll get a custom quote."
        </li>
      </ul>
    </div>
  );
}
