import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { useSubmit } from "react-router";
import * as z from "zod";

const formSchema = z
  .object({
    package: z.object({
      id: z.number(),
      name: z.string(),
      price: z.string(),
      stateLimit: z.number(),
    }),
    states: z.array(z.string()).optional(),
    addOn: z.boolean().optional(),
  })
  .refine(
    (data) => {
      // If states isn't provided, it's valid (or handle as needed)
      if (!data.states) return true;

      // Check if selected states exceed the package limit
      return data.states.length <= data.package.stateLimit;
    },
    {
      message:
        "Please select states within the allowed limit for the chosen package.",
      // This points the error message directly to the 'states' field in react-hook-form
      path: ["states"],
    },
  );

const STATE_PRICES: Record<string, number> = {
  Texas: 100,
  California: 100,
  "New York": 100,
  Florida: 100,
  Georgia: 125,
};

export default function useSelectStateForm() {
  const submit = useSubmit();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      package: {},
    },
  });

  const selectedStates =
    useWatch({
      control: form.control,
      name: "states",
      defaultValue: [],
    }) ?? [];

  const addOn = useWatch({
    control: form.control,
    name: "addOn",
    defaultValue: false,
  });

  const stateTotal = selectedStates.reduce(
    (sum, s) => sum + (STATE_PRICES[s] ?? 0),
    0,
  );

  const addOnTotal = addOn ? 500 : 0; // Assuming add-on costs $50

  const total = stateTotal + addOnTotal;

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    submit({ quizTimedOut: true }, { action: "/end-quiz", method: "post" });
  }

  return {
    form,
    onSubmit,
    total,
  };
}
