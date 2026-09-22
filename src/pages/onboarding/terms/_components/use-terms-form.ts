import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSubmit } from "react-router";
import z from "zod";

const formSchema = z.object({
  termsAccepted: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions",
  }),
});

export default function useTermsForm() {
  const submit = useSubmit();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      termsAccepted: false,
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Terms Form Data:", data);
    submit(data, { action: "/onboarding/terms", method: "post" });
  }

  return {
    form,
    onSubmit,
  };
}
