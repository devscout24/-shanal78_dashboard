import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import Steps from "../_components/steps";
import Packages from "./_components/packages";
import StateForm from "./_components/state-form";
import Total from "./_components/total";
import useSelectStateForm from "./_components/use-state-form";

export default function State() {
  const { form, onSubmit, selectedStates, isPackageSelected } =
    useSelectStateForm();

  return (
    <section>
      <form
        id="form-State"
        onSubmit={form.handleSubmit(onSubmit)}
        className="container mx-auto max-w-7xl max-lg:px-2"
      >
        <Steps activeId={2} />

        <div className="mt-10 space-y-2 rounded-2xl border-2 border-[#E5EBF2] bg-white p-6">
          <p className="text-secondary text-xs font-semibold uppercase">
            STEP 2 OF 4
          </p>
          <h3 className="text-3xl font-semibold text-black">
            Choose your plan & states
          </h3>
          <p className="text-sm font-medium text-[#475467]">
            Pick a plan, then select the states you need coverage for.
          </p>
        </div>

        <Packages form={form} />
        <StateForm
          form={form}
          selectedStates={selectedStates}
          isPackageSelected={isPackageSelected}
        />

        <Total form={form} />

        <div className="mt-6 mb-16 flex w-fit gap-5 rounded-2xl border px-6 py-3">
          <Link
            type="button"
            className="flex items-center gap-2 rounded-lg border border-[#10172A] px-5 py-2.5 text-sm font-semibold text-[#10172A]"
            to="/onboarding"
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
      </form>
    </section>
  );
}
