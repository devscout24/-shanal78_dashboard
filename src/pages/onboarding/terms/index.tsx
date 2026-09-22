import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import Steps from "../_components/steps";

export default function Terms() {
  return (
    <section>
      <div className="container mx-auto max-w-7xl max-lg:px-2">
        <Steps activeId={4} />

        {/* Header Section */}
        <div className="mt-10 space-y-2 rounded-2xl border-2 border-[#E5EBF2] bg-white p-6">
          <p className="text-secondary text-xs font-semibold uppercase">
            STEP 4 OF 4
          </p>
          <h3 className="text-3xl font-semibold text-black">
            Terms & Conditions
          </h3>
          <p className="text-sm font-medium text-[#475467]">
            Please review terms and conditions carefully before submitting.
          </p>
        </div>

        <div className="mt-10 space-y-8 rounded-2xl border-2 border-[#E5EBF2] bg-white p-8">
          <p className="rounded-[10px] bg-[#F9FAFB] px-5 py-4 text-sm font-medium text-[#344054]">
            Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
            suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
            quis montes, sit sit. Tellus aliquam enim urna.
          </p>

          <div className="space-y-8">
            {terms.map((term) => (
              <div key={term.id} className="space-y-4">
                <h4 className="text-lg font-semibold text-black">
                  {term.title}
                </h4>
                <p className="text-sm font-medium text-[#475467]">
                  {term.description}
                </p>
                {term.list && (
                  <ul className="list-disc space-y-2 pl-5">
                    {term.list.map((item, index) => (
                      <li
                        key={index}
                        className="text-sm font-medium text-[#475467]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 mb-16 flex w-fit gap-5 rounded-2xl border px-6 py-3">
          <Link
            type="button"
            className="flex items-center gap-2 rounded-lg border border-[#10172A] px-5 py-2.5 text-sm font-semibold text-[#10172A]"
            to="/onboarding/payments"
          >
            <ChevronLeft className="size-5" />
            <span>Previous</span>
          </Link>

          <Link to="/compliance-chat">
            <Button
              type="submit"
              className="h-11 cursor-pointer rounded-lg bg-[linear-gradient(270deg,#00B5C6_0%,#02519E_100%)] px-5 py-2.5 text-sm font-semibold text-white"
            >
              <span>Next</span>
              <ChevronRight className="size-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

const terms = [
  {
    id: 1,
    title: "Title",
    description:
      "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.",
    list: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    id: 2,
    title: "Title",
    description:
      "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.",
  },
  {
    id: 3,
    title: "Title",
    description:
      "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.",
    list: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    id: 4,
    title: "Title",
    description:
      "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.",
  },
  {
    id: 5,
    title: "Title",
    description:
      "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.",
    list: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    ],
  },
  {
    id: 6,
    title: "Title",
    description:
      "Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.",
  },
];
