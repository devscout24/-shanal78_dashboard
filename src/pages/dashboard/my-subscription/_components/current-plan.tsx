import ChangePlan from "./change-plan";

export default function CurrentPlan() {
  return (
    <div className="rounded-[12px] border border-[#E9EAEB] p-6">
      <div className="flex items-center justify-between gap-4 border-b border-[#E9EAEB] pb-4">
        <div>
          <p className="text-[13px] font-medium text-[#899AB3]">CURRENT PLAN</p>
          <h3 className="text-2xl font-bold text-[#101828]">
            Team plan — $450 / month
          </h3>
          <p className="text-[13px] text-[#899AB3]">
            Renews on Sep 22, 2026 · Billed monthly
          </p>
        </div>

        <ChangePlan />
      </div>

      <div className="mt-4 space-y-4">
        <div className="flex items-center gap-8">
          <div>
            <p className="text-xs font-medium text-[#899AB3]">States covered</p>
            <h3 className="text-lg font-bold text-[#101828]">3 / 20</h3>
          </div>

          <div>
            <p className="text-xs font-medium text-[#899AB3]">Team seats</p>
            <h3 className="text-lg font-bold text-[#101828]">4 / 4</h3>
          </div>

          <div>
            <p className="text-xs font-medium text-[#899AB3]">Add-ons</p>
            <h3 className="text-lg font-bold text-[#101828]">HRBP · $500/mo</h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <p className="text-[13px] text-[#899AB3]">Billing cycle:</p>
          <div className="flex w-fit items-center rounded-full bg-[#F2F5F7] p-1">
            <p className="w-fit rounded-full bg-[#00B5C6] px-4 py-1.5 text-xs font-medium text-white">
              Monthly
            </p>
            <p className="w-fit rounded-full px-4 py-1.5 pr-4 text-xs font-medium text-[#899AB3]">
              Yearly (2 months free)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
