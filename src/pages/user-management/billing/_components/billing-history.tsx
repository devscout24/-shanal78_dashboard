import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";

export default function BillingHistory() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleAll = () => {
    setSelected(
      selected.length === invoices.length ? [] : invoices.map((i) => i.id),
    );
  };

  const toggleOne = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id],
    );
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-100">
            <TableHead className="w-10 px-4">
              <Checkbox
                checked={selected.length === invoices.length}
                onCheckedChange={toggleAll}
                className="border-border border"
              />
            </TableHead>
            <TableHead className="font-sans text-sm font-medium text-gray-500">
              Invoice ↓
            </TableHead>
            <TableHead className="font-sans text-sm font-medium text-gray-500">
              Status
            </TableHead>
            <TableHead className="font-sans text-sm font-medium text-gray-500">
              Amount
            </TableHead>
            <TableHead className="font-sans text-sm font-medium text-gray-500">
              Plan
            </TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow
              key={invoice.id}
              className="border-border border-b last:border-0"
            >
              <TableCell className="px-4">
                <Checkbox
                  checked={selected.includes(invoice.id)}
                  onCheckedChange={() => toggleOne(invoice.id)}
                  className="border-border border"
                />
              </TableCell>
              <TableCell className="font-sans text-sm font-medium">
                {invoice.month}
              </TableCell>
              <TableCell>
                <span className="border-border inline-flex items-center gap-1 rounded-md border px-2 py-0.5 font-sans text-xs text-green-500">
                  <svg viewBox="0 0 12 12" className="size-3 fill-green-500">
                    <path
                      d="M1 6l3.5 3.5L11 2"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-muted-foreground">
                    {invoice.status}
                  </span>
                </span>
              </TableCell>
              <TableCell className="font-sans text-sm text-gray-700">
                {invoice.amount}
              </TableCell>
              <TableCell className="font-sans text-sm text-gray-700">
                {invoice.plan}
              </TableCell>
              <TableCell className="px-4 text-right">
                <button className="font-sans text-sm font-semibold text-[#02519E] hover:underline">
                  Edit
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const invoices = [
  {
    id: "dec-2025",
    month: "Dec 2025",
    status: "Paid",
    amount: "USD $10.00",
    plan: "Basic plan",
  },
  {
    id: "nov-2025",
    month: "Nov 2025",
    status: "Paid",
    amount: "USD $10.00",
    plan: "Basic plan",
  },
  {
    id: "oct-2025",
    month: "Oct 2025",
    status: "Paid",
    amount: "USD $10.00",
    plan: "Basic plan",
  },
  {
    id: "sep-2025",
    month: "Sep 2025",
    status: "Paid",
    amount: "USD $10.00",
    plan: "Basic plan",
  },
  {
    id: "aug-2025",
    month: "Aug 2025",
    status: "Paid",
    amount: "USD $10.00",
    plan: "Basic plan",
  },
  {
    id: "jul-2025",
    month: "Jul 2025",
    status: "Paid",
    amount: "USD $10.00",
    plan: "Basic plan",
  },
];
