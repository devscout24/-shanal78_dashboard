export type Invoice = {
  id: string;
  month: string;
  status: "Paid" | "Unpaid" | "Overdue";
  amount: number;
  plan: string;
};
