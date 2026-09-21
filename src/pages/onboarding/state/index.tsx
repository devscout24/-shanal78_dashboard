import Steps from "../_components/steps";
import Packages from "./_components/packages";
import StateForm from "./_components/state-form";
import useSelectStateForm from "./_components/use-state-form";

export default function Onboarding() {
  const { form, onSubmit, total } = useSelectStateForm();

  return (
    <section>
      <form
        id="form-onboarding"
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

        <Packages />

        <StateForm form={form} />
      </form>
    </section>
  );
}
