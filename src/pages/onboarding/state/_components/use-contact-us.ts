import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSubmit } from "react-router";
import z from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.email({ message: "Invalid email address" }),
  company: z.string().min(1, { message: "Company name is required" }),
  estimateUsers: z
    .string()
    .min(1, { message: "Estimate of users is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});

export default function useContactUsForm() {
  const submit = useSubmit();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      estimateUsers: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    submit(data, { action: "/onboarding/state", method: "post" });
  }

  return {
    form,
    onSubmit,
  };
}
