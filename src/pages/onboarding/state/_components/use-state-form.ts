import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  states: z.array(z.string()).optional(),
  addOn: z.boolean().optional(),
  // name: z.string().optional(),
  // expiry: z.string().optional(),
  // cvv: z.string().optional(),
  // card: z.string().optional(),
  // emails: z.array(z.object({ value: z.email("Invalid email") })).min(1),
  // street: z.string().optional(),
  // city: z.string().optional(),
  // state: z
  //   .object({
  //     state: z.string().optional(),
  //     province: z.string().optional(),
  //   })
  //   .optional(),
  // country: z.string().optional(),
});

const STATE_PRICES: Record<string, number> = {
  Texas: 100,
  California: 100,
  "New York": 100,
  Florida: 100,
  Georgia: 125,
};

export default function useOnboardingForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      states: [],
      addOn: false,
      // name: "",
      // expiry: "",
      // cvv: "",
      // card: "",
      // emails: [{ value: "" }],
      // street: "",
      // city: "",
      // state: {
      //   state: "",
      //   province: "",
      // },
      // country: "",
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
  }
  return {
    form,
    onSubmit,
    total,
  };
}
