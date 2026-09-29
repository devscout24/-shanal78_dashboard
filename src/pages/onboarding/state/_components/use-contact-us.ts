import { useSendLeadMutation } from "@/store/api/plan.api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
  const [sendLead] = useSendLeadMutation();

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
    console.log("🚀 ~ use-contact-us.ts:32 ~ onSubmit ~ data:", data);

    sendLead({
      name: data.name,
      email: data.email,
      company: data.company,
      users: data.estimateUsers,
      message: data.message,
    });
  }

  return {
    form,
    onSubmit,
  };
}
