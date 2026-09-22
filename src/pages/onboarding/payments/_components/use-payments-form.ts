import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSubmit } from "react-router";
import z from "zod";

const formSchema = z.object({
  cardNumber: z.string().min(12, "Enter a valid card number"),
  expiryDate: z.string().min(5, "Enter a valid expiry date"),
  cvv: z.string().min(3, "Enter a valid CVV"),
  cardHolderName: z.string().min(1, "Card holder name is required"),
});

export default function usePaymentForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cardHolderName: "",
    },
  });

  const submit = useSubmit();

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Payment Form Data:", data);
    submit(data, { action: "/onboarding/payments", method: "post" });
  }

  return {
    form,
    onSubmit,
  };
}
