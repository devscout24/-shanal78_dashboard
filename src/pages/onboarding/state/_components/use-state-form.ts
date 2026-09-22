import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { useSubmit } from "react-router";
import * as z from "zod";

const formSchema = z
  .object({
    package: z
      .object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        stateLimit: z.number(),
      })
      .nullable(), // ← allow null to represent "not selected"
    states: z.array(z.string()),
    addOn: z.boolean().optional(),
  })
  .refine(
    (data) => {
      // If states are selected but no package is chosen, block it
      if (!data.package && data.states.length > 0) return false;
      return true;
    },
    {
      message: "Please select a package before choosing states.",
      path: ["states"],
    },
  )
  .refine(
    (data) => {
      if (!data.package) return true;
      return data.states.length <= data.package.stateLimit;
    },
    {
      message:
        "Please select states within the allowed limit for the chosen package.",
      path: ["states"],
    },
  );

export default function useSelectStateForm() {
  const submit = useSubmit();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      package: null, // ← null instead of {}
      states: [],
      addOn: false,
    },
  });

  const selectedPackage = useWatch({
    control: form.control,
    name: "package",
    defaultValue: null,
  });

  const isPackageSelected =
    selectedPackage !== null && selectedPackage?.id !== undefined;

  const selectedStates =
    useWatch({
      control: form.control,
      name: "states",
      defaultValue: [],
    }) ?? [];

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    submit(data, { action: "/onboarding/state", method: "post" });
  }

  return {
    form,
    onSubmit,
    selectedStates,
    selectedPackage,
    isPackageSelected,
  };
}
